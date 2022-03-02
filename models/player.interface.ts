import { View } from "./view.enum";

export interface Player {
    playerId: string;
    roomId: string;
    rounds: Round[]
    view: View;
}

export interface Round {
    number: number;
    order: OrderColor[];
}

export type OrderColor = 'red' | 'yellow' | 'orange' | 'green' | 'blue' | 'purple';
