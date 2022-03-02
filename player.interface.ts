import { Category } from "./category.enum";
import { Group } from "./group.interface";
import { Round } from "./round.interface";
import { View } from "./view.enum";

export interface Player {
    playerId: string;
    name: string;
    group: Group;
    roomId: string;
    rounds: Round[]
    view: View;
}
