"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initialViewState = exports.ViewName = void 0;
var ViewName;
(function (ViewName) {
    ViewName[ViewName["Wizard"] = 0] = "Wizard";
    ViewName[ViewName["Lobby"] = 1] = "Lobby";
    ViewName[ViewName["Game"] = 2] = "Game";
    ViewName[ViewName["Result"] = 3] = "Result";
    ViewName[ViewName["PlayerMatch"] = 4] = "PlayerMatch";
    ViewName[ViewName["ChooseName"] = 5] = "ChooseName";
    ViewName[ViewName["SelectGroup"] = 6] = "SelectGroup";
    ViewName[ViewName["InfoScreen"] = 7] = "InfoScreen";
})(ViewName = exports.ViewName || (exports.ViewName = {}));
exports.initialViewState = {
    name: ViewName.Wizard,
    data: {},
};
