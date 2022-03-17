export declare enum ViewName {
    Wizard = 0,
    Lobby = 1,
    Game = 2,
    Result = 3,
    WaitingScreen = 4,
    PlayerMatch = 5,
    ChooseName = 6,
    SelectGroup = 7,
    InfoScreen = 8,
    Discuss = 9,
    RoundOverview = 10
}
export interface ViewState {
    name: ViewName;
    data?: ViewData;
}
export declare const initialViewState: ViewState;
export interface ViewData {
}
