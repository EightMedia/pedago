import { RoomDto } from "models";
import { createContext } from "react";

export const RoomContext = createContext<RoomDto | null>(null);
