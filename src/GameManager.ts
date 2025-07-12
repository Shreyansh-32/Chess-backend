import { WebSocket } from "ws";
import { INIT_GAME, MOVE, RESIGN } from "./message";
import { Game } from "./Game";

export class GameManager{

    private games : Game[];
    private pendingUser : WebSocket | null;
    private users : WebSocket[];
    private pendingUserId : number | null;
    
    constructor(){
        this.games = [];
        this.pendingUser = null;
        this.users = [];
        this.pendingUserId = null;
    }

    addUser(socket : WebSocket){
        this.users.push(socket);
        this.addHandler(socket);
    }

    removeUser(socket : WebSocket){
        this.users = this.users.filter(user => user !== socket)
    }

    private addHandler(socket : WebSocket){
        socket.on("message",  async(data) => {
            const message = JSON.parse(data.toString());

            if(message.type === RESIGN){
                if(!message.payload.id)return;
                const id = parseInt(message.payload.id);
                const game = this.games.find(game => game.player1Id ===id || game.player2Id === id);
                if(game){
                    await game.resign(id);
                }
                return;
            }

            if(message.type === INIT_GAME){
                if(message.payload.id === this.pendingUserId){
                    this.pendingUser = socket;
                    return;
                }
                const liveGame = this.games.find(game => 
                        (game.player1Id === message.payload.id || game.player2Id === message.payload.id) &&
                        game.result === undefined 
                    )
                    if(liveGame){
                        console.log(liveGame.board?.fen());
                        socket.send(JSON.stringify({
                            type : "live_game",
                            payload:{
                                board : liveGame.board?.fen(),
                                color : message.payload.id === liveGame.player1Id ? "w" : "b",
                                player1TimeLeft : liveGame.player1TimeLeft,
                                player2TimeLeft : liveGame.player2TimeLeft,
                                gameHistory : liveGame.gameHistory,
                                player1Name : liveGame.player1Name,
                                player2Name : liveGame.player2Name
                            }
                        }));
                        if(liveGame.player1Id === message.payload.id)liveGame.player1 = socket;
                        if(liveGame.player2Id === message.payload.id)liveGame.player2 = socket;                        
                        return;
                    }
                if(this.pendingUser){
                    if(!this.pendingUserId)return;
                    if(this.pendingUser === socket)return;
                    if(!message.payload.id)return;
                    const game = await Game.create(this.pendingUser , socket , this.pendingUserId , message.payload.id);
                    this.games.push(game);
                    this.pendingUser = null;
                    this.pendingUserId = null;
                }else{
                    this.pendingUser = socket;
                    if(!message.payload.id)return;
                    this.pendingUserId = message.payload.id;
                }
            }
            if(message.type === MOVE){
                const game = this.games.find(game => game.player1Id === message.payload.id || game.player2Id === message.payload.id);
                if(game){
                    let finished = false;
                    if(game.player1 === socket){
                        finished = game.makeMove(socket , message.payload.move , game.player1Id);
                    }else{
                        finished = game.makeMove(socket , message.payload.move , game.player2Id);
                    }

                    if(finished || game.result !== undefined){
                        this.games = this.games.filter(gam => gam !== game);
                    }
                }
            }

            return;
        })
    }
}