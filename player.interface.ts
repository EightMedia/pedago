import { Category } from "./category.enum";
import { Round } from "./round.interface";
import { View } from "./view.enum";

export interface Player {
    playerId: string;
    roomId: string;
    rounds: Round[]
    view: View;
}
