import {
  ResultGroup,
  ResultSet,
  ResultStep
} from "@components/Result/Result.types";
import { DEFAULT_LANGUAGE } from "@contexts/LanguageContext";
import { RoomContext } from "@contexts/RoomContext";
import { SocketContext } from "@contexts/SocketContext";
import { getDiscussType } from "@factories/Discuss.factory";
import { getLobbyType } from "@factories/Lobby.factory";
import { getPlayerMatchType } from "@factories/PlayerMatch.factory";
import { getResultData } from "@factories/Result.factory";
import {
  getTimeStampFromLocalStorage,
  setTimeStampToLocalStorage
} from "@factories/shared.factory";
import { getWaitingType } from "@factories/Waiting.factory";
import LanguageProvider from "@providers/Language.provider";
import TimerProvider from "@providers/Timer.provider";
import { onDisconnect } from "@utils/onDisconnect.util";
import { useSocket } from "@utils/useSocket.util";
import { Discuss } from "@views/game/Discuss";
import { DiscussStep } from "@views/game/Discuss/Discuss.types";
import { Game } from "@views/game/Game";
import { GameScenes } from "@views/game/Game/Game.types";
import { Lobby } from "@views/game/Lobby";
import { PlayerMatch } from "@views/game/PlayerMatch/PlayerMatch";
import { PlayerMatchSceneEnum } from "@views/game/PlayerMatch/PlayerMatch.types";
import { Result } from "@views/game/Result";
import { Waiting } from "@views/game/Waiting";
import { Wizard } from "@views/game/Wizard";
import { WizardStep } from "@views/game/Wizard/Wizard.types";
import { getCookie, removeCookies, setCookies } from "cookies-next";
import {
  Event,
  Language,
  Player,
  PlayerEvent,
  RoomDto,
  SocketCallback,
  ViewName,
  ViewState
} from "models";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Socket } from "socket.io-client";

const RoomCode = ({
  localLang,
  localPlayerId,
}: {
  localLang: Language;
  localPlayerId: string;
}) => {
  const socket: Socket | null = useSocket(
    process.env.NEXT_PUBLIC_SOCKET_URL || "http://localhost:80"
  );
  const [view, setView] = useState<ViewState>({ name: ViewName.Wizard });
  const [wizardStep, setWizardStep] = useState<WizardStep>(WizardStep.RoomCode);
  const [playerMatchScene, setPlayerMatchScene] =
    useState<PlayerMatchSceneEnum>(PlayerMatchSceneEnum.Wait);
  const [gameScene, setGameScene] = useState<GameScenes>(GameScenes.Sort);
  const [playerList, setPlayerList] = useState<Player[]>([]);
  const [room, setRoom] = useState<RoomDto>({} as RoomDto);
  const [error, setError] = useState<string | undefined>();
  const [timer, setTimer] = useState<number | null>(0);
  const [playerId, setPlayerId] = useState<string | null>(localPlayerId);
  const [language, setLanguage] = useState<Language>(localLang);

  const ROUND_MAX = 6;

  const handleMessage = (v: any) => {
    console.log(v);
  };

  const handleBackToSort = () => {
    setView({ name: ViewName.Game });
    setGameScene(GameScenes.Sort);
  };

  const router = useRouter();
  const roomCode = parseInt(router.query.roomCode as string, 10);

  useEffect(() => {
    setTimer(getTimeStampFromLocalStorage());
  }, []);

  useEffect(() => {
    setPlayerId(localPlayerId);
  }, [localPlayerId]);

  useEffect(() => {
    if (roomCode && socket) {
      (socket as Socket).emit(
        PlayerEvent.JoinRoomByRoomCode,
        playerId,
        roomCode,
        (r: SocketCallback) => {
          if (r.status === "OK") {
            setWizardStep(WizardStep.Name);
            setError(undefined);
          } else {
            setWizardStep(WizardStep.RoomCode);
            const messageObject = r.message as { EN: string; NL: string };
            setError(messageObject[localLang]);
          }
        }
      );
    }
  }, [socket, roomCode, error, localLang]);

  useEffect(() => {
    if (socket) {
      socket.on(Event.Message, handleMessage);
      socket.on(Event.To, setView);
      socket.on(Event.Room, (r: RoomDto) => {
        setRoom(r);
        setTimer(r.timerStamp);
        setTimeStampToLocalStorage(r.timerStamp);
        setPlayerId(getCookie("playerId") as string);
        setCookies("language", r.language || DEFAULT_LANGUAGE);
        setLanguage(r.language || DEFAULT_LANGUAGE)
      });
      socket.on(Event.PlayerList, setPlayerList);
      socket.on(PlayerEvent.GameScene, (setToCountdown: boolean) =>
        setToCountdown
          ? setGameScene(GameScenes.Countdown)
          : setGameScene(GameScenes.Sort)
      );
      socket.on(PlayerEvent.PlayerMatchScene, (setToWait: boolean) =>
        setPlayerMatchScene(
          setToWait ? PlayerMatchSceneEnum.Wait : PlayerMatchSceneEnum.Match
        )
      );
      socket.on(PlayerEvent.ExitGame, () => {
        removeCookies("playerId");
        removeCookies("roomCode");
        router.push("/");
      });
      socket.on("disconnect", reason => onDisconnect(reason, router));
    }
    return () => {
      socket?.off(PlayerEvent.JoinGroup);
    }
  }, [socket]);

  return (
    <>
      <Head>
        <title>Pedago Game</title>
      </Head>
      <LanguageProvider lang={language}>
        <SocketContext.Provider value={socket}>
          <RoomContext.Provider value={room}>
            <TimerProvider timeStamp={timer as number}>
              {(() => {
                switch (view.name) {
                  case ViewName.Wizard:
                    return <Wizard initialStep={wizardStep} error={error} />;
                  case ViewName.Lobby:
                    return (
                      <Lobby
                        {...getLobbyType(
                          socket as Socket,
                          room.round,
                          ROUND_MAX,
                          room,
                          playerList
                        )}
                        playerId={playerId || undefined}
                      />
                    );
                  case ViewName.PlayerMatch:
                    return (
                      <PlayerMatch
                        {...getPlayerMatchType(
                          room.round,
                          ROUND_MAX,
                          room,
                          playerId as string
                        )}
                        initialScene={playerMatchScene}
                      />
                    );
                  case ViewName.Game:
                    return (
                      <Game
                        autoPlay={true}
                        initialScene={gameScene}
                        round={room.round}
                        countdownTime={3}
                        leadTime={3}
                      />
                    );
                  case ViewName.WaitingScreen:
                    return (
                      <Waiting
                        {...getWaitingType(
                          room.round,
                          ROUND_MAX,
                          room,
                          playerId as string
                        )}
                        backToSort={handleBackToSort}
                      />
                    );
                  case ViewName.Discuss:
                    return (
                      <Discuss
                        {...getDiscussType(
                          room.round,
                          ROUND_MAX,
                          DiscussStep.Intro,
                          false,
                          true,
                          room,
                          playerId as string
                        )}
                      />
                    );
                  case ViewName.Result:
                    return (
                      <Result
                        initialStep={ResultStep.Loader}
                        autoPlay={view.data?.autoPlay}
                        data={
                          getResultData(room, playerId as string) as {
                            me?: ResultSet;
                            groups: ResultGroup[];
                          }
                        }
                      />
                    );
                  default:
                    return <>ERROR: ViewName not found</>;
                }
              })()}
            </TimerProvider>
          </RoomContext.Provider>
        </SocketContext.Provider>
      </LanguageProvider>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const localLang = getCookie("language", { req, res });
  const playerId = getCookie("playerId", { req, res });

  return {
    props: {
      localLang: localLang || DEFAULT_LANGUAGE,
      localPlayerId: playerId || null,
    },
  };
};

export default RoomCode;
