import { Chess } from "chess.js";
import { WebSocket } from "ws";
import { GAME_OVER, INIT_GAME, MOVE } from "./message";
import { PrismaClient } from "@prisma/client";



const prisma = new PrismaClient();

export class Game {
  public player1: WebSocket;
  public player2: WebSocket;
  public board: Chess | undefined;
  public gameHistory : string[] | undefined;
  private moveCount = 0;
  public player1Id: number;
  public player2Id: number;
  public gameId: number | undefined;
  public lastMoveTime: number;
  public player1TimeLeft: number;
  public player2TimeLeft: number;
  public result: "draw" | "white" | "black" | undefined;
  private clockInterval: NodeJS.Timeout | null;
  public player1Name : string | null;
  public player2Name : string | null;
  public isPlayer1Draw : boolean;
  public isPlayer2Draw : boolean;

  constructor(
    player1: WebSocket,
    player2: WebSocket,
    player1ID: number,
    player2Id: number
  ) {
    this.player1 = player1;
    this.player2 = player2;
    this.player1Id = player1ID;
    this.player2Id = player2Id;
    this.board = new Chess();
    this.lastMoveTime = new Date().getTime();
    this.player1TimeLeft = 10 * 60 * 1000;
    this.player2TimeLeft = 10 * 60 * 1000;
    this.result = undefined;
    this.clockInterval = null;
    this.player1Name = null;
    this.player2Name = null;
    this.isPlayer1Draw = false;
    this.isPlayer2Draw = false;
  }

  static async create(
    player1: WebSocket,
    player2: WebSocket,
    player1ID: number,
    player2Id: number
  ): Promise<Game> {
    const game = new Game(player1, player2, player1ID, player2Id);
    const res = await prisma.game.create({
      data: {
        player1Id: game.player1Id,
        player2Id: game.player2Id,
        status: false,
        result: "draw",
      },
    });
    const player1NameUser = await prisma.player.findFirst({
      where : {id : player1ID}
    });
    const player2NameUser = await prisma.player.findFirst({
      where : {id : player2Id}
    });
    if(!player1NameUser || !player2NameUser)return game;
    game.player1Name = player1NameUser.username;
    game.player2Name = player2NameUser.username;
    game.gameId = res.id;
    game.startClock();
    game.player1.send(
      JSON.stringify({ type: INIT_GAME, payload: { color: "white" , player1Name : player1NameUser.username , player2Name : player2NameUser.username} })
    );
    game.player2.send(
      JSON.stringify({ type: INIT_GAME, payload: { color: "black" , player1Name : player1NameUser.username , player2Name : player2NameUser.username } })
    );

    return game;
  }

  makeMove(
    socket: WebSocket,
    move: {
      from: string;
      to: string;
    },
    playerId: number
  ): boolean {
    if (!this.board) return true;
    if (!this.gameId) return true;
    try {
      const turn = this.board.turn();
      this.board.move(move);
      this.gameHistory = this.board.history();
      if (turn === "w" && playerId === this.player1Id) {
        this.moveCount++;
        prisma.move
          .create({
            data: {
              from: move.from,
              to: move.to,
              playerId,
              gameId: this.gameId,
            },
          })
          .then(() => {});
      }
      if (turn === "b" && playerId === this.player2Id) {
        this.moveCount++;
        prisma.move
          .create({
            data: {
              from: move.from,
              to: move.to,
              playerId,
              gameId: this.gameId,
            },
          })
          .then(() => {});
      }
    } catch (e) {
      return false;
    }

    if (this.board.isGameOver()) {
      const winner = this.board.isDraw()
        ? "draw"
        : this.board.turn() === "b"
        ? "white"
        : "black";
      this.player1.send(
        JSON.stringify({
          type: GAME_OVER,
          payload: {
            winner,
            player1TimeLeft : this.player1TimeLeft,
            player2TimeLeft : this.player2TimeLeft
          },
        })
      );
      this.player2.send(
        JSON.stringify({
          type: GAME_OVER,
          payload: {
            winner,
            player1TimeLeft : this.player1TimeLeft,
            player2TimeLeft : this.player2TimeLeft,
          },
        })
      );
      try {
        prisma.game
          .update({
            where: {
              id: this.gameId,
            },
            data: {
              status: true,
              result: winner,
            },
          })
          .then(() => {
        
          });
      } catch (err) {}
    }
    this.player2.send(
      JSON.stringify({
        type: MOVE,
        payload: {
          move,
          player1TimeLeft: this.player1TimeLeft,
          player2TimeLeft: this.player2TimeLeft,
          gameHistory : this.gameHistory
        },
      })
    );
    this.player1.send(
      JSON.stringify({
        type: MOVE,
        payload: {
          move,
          player1TimeLeft: this.player1TimeLeft,
          player2TimeLeft: this.player2TimeLeft,
          gameHistory : this.gameHistory
        },
      })
    );
    if (this.board.isGameOver()) {
      return true;
    }
    return false;
  }

  startClock() {
    if (this.clockInterval) return;

    this.clockInterval = setInterval(() => {
      if (!this.board) return;

      const turn = this.board.turn();

      if (turn === "w") {
        this.player1TimeLeft -= 1000;
        if (this.player1TimeLeft <= 0) this.endGame("black");
      } else {
        this.player2TimeLeft -= 1000;
        if (this.player2TimeLeft <= 0) this.endGame("white");
      }
    }, 1000);
  }

  endGame(winner: "white" | "black" | "draw") {
    if (!this.clockInterval) return;
    if(!this.gameId)return;
    clearInterval(this.clockInterval);
    this.clockInterval = null;
    this.result = winner;
    try {
      prisma.game
      .update({
        where: {
          id: this.gameId,
        },
        data: {
          status: true,
          result: winner,
        },
      })
      .then(() => {
        
      });
    } catch (error) {
      return;
    }
    this.player1.send(
      JSON.stringify({
        type: GAME_OVER,
        payload: {
          winner,
          player1TimeLeft : this.player1TimeLeft,
          player2TimeLeft : this.player2TimeLeft
        },
      })
    );
  
    this.player2.send(
      JSON.stringify({
        type: GAME_OVER,
        payload: {
          winner,
          player1TimeLeft : this.player1TimeLeft,
          player2TimeLeft : this.player2TimeLeft
        },
      })
    );
  }

  public async resign(playerId : number){
    const winner = playerId === this.player1Id ? "black" : playerId === this.player2Id ? "white" : "draw";
    if(winner){
      async function res(){
        try{
        
        const resGame =  await prisma.game.findFirst({
          where : {
            OR:[
              {player1Id : playerId},
              {player2Id : playerId}
            ],
            status : false
          }
        })

        if(resGame){
          await prisma.game.update({
            where:{
              id : resGame.id
            },
            data:{
              result : winner,
              status : true
            }
          });
          return true;
        }
        return false;
      }catch(err){return false;}
      }

      const out = await res();
      if(out){
        this.player1.send(JSON.stringify({
          "type" : GAME_OVER,
          payload : {
            "winner" : winner,
            player1TimeLeft : this.player1TimeLeft,
            player2TimeLeft : this.player2TimeLeft,
          }
        }));
        this.player2.send(JSON.stringify({
          "type" : GAME_OVER,
          payload : {
            "winner" : winner,
            player1TimeLeft : this.player1TimeLeft,
            player2TimeLeft : this.player2TimeLeft,
          }
        }));
        return true;
      }
      return false;
    }
    return false;
  }

  async draw(playerId : number){
    if(playerId === this.player1Id)this.isPlayer1Draw = true;
    if(playerId === this.player2Id)this.isPlayer2Draw = true;

    if(this.isPlayer1Draw && this.isPlayer2Draw){
      try{
        await prisma.game.update({
          where : {
            id : this.gameId
          },
          data:{
            status : true,
            result : "draw"
          }
        });
        this.player1.send(JSON.stringify({
          "type" : GAME_OVER,
          payload : {
            "winner" : "draw",
            player1TimeLeft : this.player1TimeLeft,
            player2TimeLeft : this.player2TimeLeft,
          }
        }));
        this.player2.send(JSON.stringify({
          "type" : GAME_OVER,
          payload : {
            "winner" : "draw",
            player1TimeLeft : this.player1TimeLeft,
            player2TimeLeft : this.player2TimeLeft,
          }
        }));
        return true;
      }catch(err){return false;}
    }
    return false;
  }
}
