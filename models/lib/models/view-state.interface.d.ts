export declare enum ViewName {
    Wizard,
    Lobby,
    Game,
    Result,
    SelectGroup,
    InfoScreen
}
export interface ViewState {
    name: ViewName;
    data: ViewData;
}
export declare const initialViewState: ViewState;
export interface ViewData {
}
