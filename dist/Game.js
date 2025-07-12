"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
const chess_js_1 = require("chess.js");
const message_1 = require("./message");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class Game {
    constructor(player1, player2, player1ID, player2Id) {
        this.moveCount = 0;
        this.player1 = player1;
        this.player2 = player2;
        this.player1Id = player1ID;
        this.player2Id = player2Id;
        this.board = new chess_js_1.Chess();
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
    static create(player1, player2, player1ID, player2Id) {
        return __awaiter(this, void 0, void 0, function* () {
            const game = new Game(player1, player2, player1ID, player2Id);
            const res = yield prisma.game.create({
                data: {
                    player1Id: game.player1Id,
                    player2Id: game.player2Id,
                    status: false,
                    result: "draw",
                },
            });
            const player1NameUser = yield prisma.player.findFirst({
                where: { id: player1ID }
            });
            const player2NameUser = yield prisma.player.findFirst({
                where: { id: player2Id }
            });
            if (!player1NameUser || !player2NameUser)
                return game;
            game.player1Name = player1NameUser.username;
            game.player2Name = player2NameUser.username;
            game.gameId = res.id;
            game.startClock();
            game.player1.send(JSON.stringify({ type: message_1.INIT_GAME, payload: { color: "white", player1Name: player1NameUser.username, player2Name: player2NameUser.username } }));
            game.player2.send(JSON.stringify({ type: message_1.INIT_GAME, payload: { color: "black", player1Name: player1NameUser.username, player2Name: player2NameUser.username } }));
            return game;
        });
    }
    makeMove(socket, move, playerId) {
        if (!this.board)
            return true;
        if (!this.gameId)
            return true;
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
                    .then(() => { });
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
                    .then(() => { });
            }
        }
        catch (e) {
            return false;
        }
        if (this.board.isGameOver()) {
            const winner = this.board.isDraw()
                ? "draw"
                : this.board.turn() === "b"
                    ? "white"
                    : "black";
            this.player1.send(JSON.stringify({
                type: message_1.GAME_OVER,
                payload: {
                    winner,
                    player1TimeLeft: this.player1TimeLeft,
                    player2TimeLeft: this.player2TimeLeft
                },
            }));
            this.player2.send(JSON.stringify({
                type: message_1.GAME_OVER,
                payload: {
                    winner,
                    player1TimeLeft: this.player1TimeLeft,
                    player2TimeLeft: this.player2TimeLeft,
                },
            }));
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
            }
            catch (err) { }
        }
        this.player2.send(JSON.stringify({
            type: message_1.MOVE,
            payload: {
                move,
                player1TimeLeft: this.player1TimeLeft,
                player2TimeLeft: this.player2TimeLeft,
                gameHistory: this.gameHistory
            },
        }));
        this.player1.send(JSON.stringify({
            type: message_1.MOVE,
            payload: {
                move,
                player1TimeLeft: this.player1TimeLeft,
                player2TimeLeft: this.player2TimeLeft,
                gameHistory: this.gameHistory
            },
        }));
        if (this.board.isGameOver()) {
            return true;
        }
        return false;
    }
    startClock() {
        if (this.clockInterval)
            return;
        this.clockInterval = setInterval(() => {
            if (!this.board)
                return;
            const turn = this.board.turn();
            if (turn === "w") {
                this.player1TimeLeft -= 1000;
                if (this.player1TimeLeft <= 0)
                    this.endGame("black");
            }
            else {
                this.player2TimeLeft -= 1000;
                if (this.player2TimeLeft <= 0)
                    this.endGame("white");
            }
        }, 1000);
    }
    endGame(winner) {
        if (!this.clockInterval)
            return;
        if (!this.gameId)
            return;
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
        }
        catch (error) {
            return;
        }
        this.player1.send(JSON.stringify({
            type: message_1.GAME_OVER,
            payload: {
                winner,
                player1TimeLeft: this.player1TimeLeft,
                player2TimeLeft: this.player2TimeLeft
            },
        }));
        this.player2.send(JSON.stringify({
            type: message_1.GAME_OVER,
            payload: {
                winner,
                player1TimeLeft: this.player1TimeLeft,
                player2TimeLeft: this.player2TimeLeft
            },
        }));
    }
    resign(playerId) {
        return __awaiter(this, void 0, void 0, function* () {
            const winner = playerId === this.player1Id ? "white" : playerId === this.player2Id ? "black" : "draw";
            if (winner) {
                function res() {
                    return __awaiter(this, void 0, void 0, function* () {
                        try {
                            const resGame = yield prisma.game.findFirst({
                                where: {
                                    OR: [
                                        { player1Id: playerId },
                                        { player2Id: playerId }
                                    ],
                                    status: false
                                }
                            });
                            if (resGame) {
                                yield prisma.game.update({
                                    where: {
                                        id: resGame.id
                                    },
                                    data: {
                                        result: winner,
                                        status: true
                                    }
                                });
                                return true;
                            }
                            return false;
                        }
                        catch (err) {
                            return false;
                        }
                    });
                }
                const out = yield res();
                if (out) {
                    this.player1.send(JSON.stringify({
                        "type": message_1.GAME_OVER,
                        payload: {
                            "winner": winner,
                            player1TimeLeft: this.player1TimeLeft,
                            player2TimeLeft: this.player2TimeLeft,
                        }
                    }));
                    this.player2.send(JSON.stringify({
                        "type": message_1.GAME_OVER,
                        payload: {
                            "winner": winner,
                            player1TimeLeft: this.player1TimeLeft,
                            player2TimeLeft: this.player2TimeLeft,
                        }
                    }));
                }
            }
        });
    }
    draw(playerId) {
        return __awaiter(this, void 0, void 0, function* () {
            this.isPlayer1Draw = playerId === this.player1Id;
            this.isPlayer2Draw = playerId === this.player2Id;
            if (this.isPlayer1Draw && this.isPlayer2Draw) {
                try {
                    yield prisma.game.update({
                        where: {
                            id: this.gameId
                        },
                        data: {
                            status: true,
                            result: "draw"
                        }
                    });
                    this.player1.send(JSON.stringify({
                        "type": message_1.GAME_OVER,
                        payload: {
                            "winner": "draw",
                            player1TimeLeft: this.player1TimeLeft,
                            player2TimeLeft: this.player2TimeLeft,
                        }
                    }));
                    this.player2.send(JSON.stringify({
                        "type": message_1.GAME_OVER,
                        payload: {
                            "winner": "draw",
                            player1TimeLeft: this.player1TimeLeft,
                            player2TimeLeft: this.player2TimeLeft,
                        }
                    }));
                }
                catch (err) {
                    return;
                }
            }
        });
    }
}
exports.Game = Game;
