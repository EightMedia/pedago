"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initialViewState = exports.ViewName = void 0;
var ViewName;
(function (ViewName) {
    ViewName[ViewName["Wizard"] = 0] = "Wizard";
    ViewName[ViewName["Lobby"] = 1] = "Lobby";
    ViewName[ViewName["Game"] = 2] = "Game";
    ViewName[ViewName["Result"] = 3] = "Result";
    ViewName[ViewName["WaitingScreen"] = 4] = "WaitingScreen";
    ViewName[ViewName["PlayerMatch"] = 5] = "PlayerMatch";
    ViewName[ViewName["ChooseName"] = 6] = "ChooseName";
    ViewName[ViewName["SelectGroup"] = 7] = "SelectGroup";
    ViewName[ViewName["InfoScreen"] = 8] = "InfoScreen";
    ViewName[ViewName["Discuss"] = 9] = "Discuss";
    ViewName[ViewName["RoundOverview"] = 10] = "RoundOverview";
})(ViewName = exports.ViewName || (exports.ViewName = {}));
exports.initialViewState = {
    name: ViewName.Wizard,
    data: {},
};
