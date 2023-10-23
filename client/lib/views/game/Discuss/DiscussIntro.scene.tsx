import { Page } from "@components/Page";
import { PageSlot } from "@components/Page/Page";
import { Timer } from "@components/Timer";
import { Title } from "@components/Title";
import { LanguageContext } from "@contexts/LanguageContext";
import { RoomContext } from "@contexts/RoomContext";
import { SocketContext } from "@contexts/SocketContext";
import { TimerContext } from "@contexts/TimerContext";
import { TimedCallback } from "@utils/timedCallback.util";
import { useContext } from "react";
import { DiscussType } from "./Discuss.types";

export type DiscussIntroProps = {
  time: number;
  callback?: () => void;
  teamMembers: DiscussType["teamMembers"];
  round: number;
  roundMax: number;
};

export const DiscussIntro = ({
  time = 6,
  callback,
  teamMembers,
  round,
  roundMax,
}: DiscussIntroProps) => {
  TimedCallback(time, callback);
  const { text, lang } = useContext(LanguageContext);
  const socket = useContext(SocketContext);
  const timer = useContext(TimerContext);
  const room = useContext(RoomContext);

  const names =
    teamMembers?.filter((p) => p.socketId !== socket?.id).map((p) => p.name) ??
    [];
  return (
    <Page valign="center">
      <PageSlot location="headerLeft">
        {(room?.options?.timer as boolean) && <Timer time={timer} />}
      </PageSlot>
      <PageSlot location="headerCenter">
        {text.game.round} {round} {text.game.of} {roundMax}
      </PageSlot>
      <Title>
        {text.discuss.intro.discussDiff}{" "}
        {names.length > 1
          ? names.join(` ${lang === "NL" ? "en" : "and"} `)
          : names.join()}
      </Title>
    </Page>
  );
};
