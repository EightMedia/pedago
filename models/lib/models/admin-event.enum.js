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
    AdminEvent["Disconnect"] = "disconnect";
    AdminEvent["LobbyStep"] = "lobbyStep";
    AdminEvent["GameScene"] = "gameScene";
})(AdminEvent = exports.AdminEvent || (exports.AdminEvent = {}));
