"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminEvent = void 0;
var AdminEvent;
(function (AdminEvent) {
    AdminEvent["RegisterGame"] = "registerGame";
    AdminEvent["StartGame"] = "startGame";
    AdminEvent["UpdateRoom"] = "updateRoom";
    AdminEvent["FinishRound"] = "finishRound";
    AdminEvent["Reset"] = "reset";
    AdminEvent["EndGame"] = "endGame";
    AdminEvent["Disconnect"] = "disconnect";
    AdminEvent["LobbyStep"] = "lobbyStep";
    AdminEvent["GameScene"] = "gameScene";
    AdminEvent["Lock"] = "lock";
    AdminEvent["KickPlayer"] = "kickPlayer";
})(AdminEvent = exports.AdminEvent || (exports.AdminEvent = {}));
