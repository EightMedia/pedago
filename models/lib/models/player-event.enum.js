"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerEvent = void 0;
var PlayerEvent;
(function (PlayerEvent) {
    PlayerEvent["RoomCodeExists"] = "roomCodeExists";
    PlayerEvent["JoinRoomByRoomCode"] = "joinRoomByRoomCode";
    PlayerEvent["JoinRoomWithName"] = "joinRoomWithName";
    PlayerEvent["JoinGroup"] = "joinGroup";
    PlayerEvent["RequestLobby"] = "requestLobby";
    PlayerEvent["GameStart"] = "gameStart";
    PlayerEvent["StoreRound"] = "storeRound";
    PlayerEvent["StoreTeamReady"] = "storeTeamReady";
    PlayerEvent["GameScene"] = "gameScene";
    PlayerEvent["SortOrder"] = "sortOrder";
    PlayerEvent["PlayerMatchScene"] = "playerMatchScene";
    PlayerEvent["FinishRoundByAdmin"] = "finishRoundByAdmin";
    PlayerEvent["ExitGame"] = "exitGame";
})(PlayerEvent = exports.PlayerEvent || (exports.PlayerEvent = {}));
