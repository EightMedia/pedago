import { Group, Player, PlayerStatus, RoomDto, Round, ViewState } from "models";
import create, { GetState, SetState, StoreApi } from "zustand/vanilla";
import {
  addPlayerToRoomFn,
  addRoomFn,
  getGroupsByRoomIdFn,
  getPlayerByIdFn,
  makeTeamsFn,
  setAllPlayersViewFn,
  setTeamPlayerStatusFn,
  setTeamReadyFn,
  storeRoundFn,
  updatePlayerFn,
  updateRoomFn
} from "./games.query";
export interface GamesState {
  games: RoomDto[];

  getRoomById: (roomId: string) => RoomDto | undefined;
  getRoomByRoomCode: (roomCode: number) => RoomDto | undefined;
  getPlayerById: (roomId: string, playerId: string) => Player | undefined;
  getGroupsByRoomId: (roomId: string) => Group[] | undefined;
  getTeams: (roomId: string) => Player[][] | undefined;
  getTeamIndex: (roomId: string, playerId: string) => number;
  getTeamReady: (roomId: string, index: number, status: PlayerStatus) => boolean;

  addRoom: (room: RoomDto) => void;
  updateRoom: (room: RoomDto) => void;
  addPlayerToRoom: (roomId: string, player: Partial<Player>) => void;
  updatePlayer: (
    roomId: string,
    playerId: string,
    player: Partial<Player>
  ) => void;
  setTeamPlayerStatus: (
    roomId: string,
    playerId: string,
    teamIndex: number,
    status: PlayerStatus
  ) => void;
  setTeamReady: (
    roomId: string,
    teamIndex: number,
    status: PlayerStatus
  ) => void;
  setAllPlayersView: (roomId: string, viewState: ViewState) =>
      void;
  makeTeams: (roomId: string) => void;
  storeRound: (roomId: string, playerId: string, teamIndex: number, round: Round) => void;
  removeAllGames: () => void;
}

const gamesStore: StoreApi<GamesState> = create<GamesState>(
  (set: SetState<GamesState>, get: GetState<GamesState>) => ({
    games: [],

    // Getters
    getRoomById: (roomId: string) =>
      get().games.find((room) => room.id === roomId),
    getRoomByRoomCode: (roomCode: number) =>
      get().games.find((room) => room.roomCode === roomCode),
    getPlayerById: (roomId: string, playerId: string) =>
      getPlayerByIdFn(get, roomId, playerId),
    getGroupsByRoomId: (roomId: string) => getGroupsByRoomIdFn(get, roomId),
    getTeams: (roomId: string) =>
      get().games.find((room) => room.id === roomId)?.teams,
    getTeamIndex: (roomId: string, playerId: string) =>
      (get().getTeams(roomId) as Player[][]).findIndex((team) =>
        team.some((player) => player.id === playerId)
      ),
    getTeamReady: (roomId: string, index: number, status: PlayerStatus): boolean =>
      (get().getTeams(roomId) as Player[][])[index]?.every(
        (player: Player) => player.status === status
      ),
    // Setters
    addRoom: (room: RoomDto) => addRoomFn(set, room),
    updateRoom: (room: RoomDto) => updateRoomFn(set, room),
    addPlayerToRoom: (roomId: string, player: Partial<Player>) =>
      addPlayerToRoomFn(set, roomId, player),
    updatePlayer: (roomId: string, playerId: string, player: Partial<Player>) =>
      updatePlayerFn(set, roomId, playerId, player),
    setTeamPlayerStatus: (
      roomId: string,
      playerId: string,
      teamIndex: number,
      status: PlayerStatus
    ) => setTeamPlayerStatusFn(set, roomId, playerId, teamIndex, status),
    setTeamReady: (roomId: string, teamIndex: number, status: PlayerStatus) =>
      setTeamReadyFn(set, roomId, teamIndex, status),
    setAllPlayersView: (roomId: string, viewState: ViewState) =>
      setAllPlayersViewFn(set, roomId, viewState),
    makeTeams: (roomId: string) => makeTeamsFn(set, roomId),
    storeRound: (roomId: string, playerId: string, teamIndex: number, round: Round) =>
      storeRoundFn(set, roomId, playerId, teamIndex, round),
    removeAllGames: () => set({ games: [] }),
  })
);

export default gamesStore;
