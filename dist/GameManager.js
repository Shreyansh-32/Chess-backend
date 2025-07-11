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
exports.GameManager = void 0;
const message_1 = require("./message");
const Game_1 = require("./Game");
class GameManager {
    constructor() {
        this.games = [];
        this.pendingUser = null;
        this.users = [];
        this.pendingUserId = null;
    }
    addUser(socket) {
        this.users.push(socket);
        this.addHandler(socket);
    }
    removeUser(socket) {
        this.users = this.users.filter(user => user !== socket);
    }
    addHandler(socket) {
        socket.on("message", (data) => __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            const message = JSON.parse(data.toString());
            if (message.type === message_1.INIT_GAME) {
                const liveGame = this.games.find(game => (game.player1Id === message.payload.id || game.player2Id === message.payload.id) &&
                    game.result === undefined);
                if (liveGame) {
                    console.log((_a = liveGame.board) === null || _a === void 0 ? void 0 : _a.fen());
                    socket.send(JSON.stringify({
                        type: "live_game",
                        payload: {
                            board: (_b = liveGame.board) === null || _b === void 0 ? void 0 : _b.fen(),
                            color: message.payload.id === liveGame.player1Id ? "w" : "b",
                            player1TimeLeft: liveGame.player1TimeLeft,
                            player2TimeLeft: liveGame.player2TimeLeft,
                            gameHistory: liveGame.gameHistory,
                            player1Name: liveGame.player1Name,
                            player2Name: liveGame.player2Name
                        }
                    }));
                    if (liveGame.player1Id === message.payload.id)
                        liveGame.player1 = socket;
                    if (liveGame.player2Id === message.payload.id)
                        liveGame.player2 = socket;
                    return;
                }
                if (this.pendingUser) {
                    if (!this.pendingUserId)
                        return;
                    if (this.pendingUser === socket)
                        return;
                    const game = yield Game_1.Game.create(this.pendingUser, socket, this.pendingUserId, message.payload.id);
                    this.games.push(game);
                    this.pendingUser = null;
                    this.pendingUserId = null;
                }
                else {
                    this.pendingUser = socket;
                    this.pendingUserId = message.payload.id;
                }
            }
            if (message.type === message_1.MOVE) {
                const game = this.games.find(game => game.player1Id === message.payload.id || game.player2Id === message.payload.id);
                if (game) {
                    let finished = false;
                    if (game.player1 === socket) {
                        finished = game.makeMove(socket, message.payload.move, game.player1Id);
                    }
                    else {
                        finished = game.makeMove(socket, message.payload.move, game.player2Id);
                    }
                    if (finished || game.result !== undefined) {
                        this.games = this.games.filter(gam => gam !== game);
                    }
                }
            }
            return;
        }));
    }
}
exports.GameManager = GameManager;
