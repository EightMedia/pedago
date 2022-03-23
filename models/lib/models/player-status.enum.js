"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerStatus = void 0;
var PlayerStatus;
(function (PlayerStatus) {
    PlayerStatus[PlayerStatus["NotStarted"] = 0] = "NotStarted";
    PlayerStatus[PlayerStatus["InProgress"] = 1] = "InProgress";
    PlayerStatus[PlayerStatus["Discuss"] = 2] = "Discuss";
    PlayerStatus[PlayerStatus["Done"] = 3] = "Done";
})(PlayerStatus = exports.PlayerStatus || (exports.PlayerStatus = {}));
