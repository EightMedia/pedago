"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerEvent = void 0;
var PlayerEvent;
(function (PlayerEvent) {
    PlayerEvent["PlayerExists"] = "playerExists";
    PlayerEvent["JoinRoomByGameCode"] = "joinRoomByGameCode";
    PlayerEvent["JoinRoomWithName"] = "joinRoomWithName";
    PlayerEvent["JoinGroup"] = "joinGroup";
    PlayerEvent["RequestLobby"] = "requestLobby";
    PlayerEvent["GameStart"] = "gameStart";
    PlayerEvent["StoreRound"] = "storeRound";
    PlayerEvent["StoreTeamReady"] = "storeTeamReady";
})(PlayerEvent = exports.PlayerEvent || (exports.PlayerEvent = {}));
