import { useContext } from "react";
import { LanguageContext } from "../../../../contexts/LanguageContext";
import { Page } from "../../../components/Page";
import { PageSlot } from "../../../components/Page/Page";
import { Timer } from "../../../components/Timer";
import { Title } from "../../../components/Title";
import { TimedCallback } from "../../../utils/timedCallback.util";
import { DiscussType } from "./Discuss.types";

export type DiscussReadyProps = {
  teamMembers: DiscussType["teamMembers"];
  time: number;
  round: number;
  roundMax: number;
  callback?: () => void;
};

export const DiscussReady = ({
  time = 3,
  callback,
  teamMembers,
  round,
  roundMax,
}: DiscussReadyProps) => {
  TimedCallback(time, callback);
  const text = useContext(LanguageContext);
  return (
    <Page valign="center">
      <PageSlot location="headerLeft">
        <Timer time={600} />
      </PageSlot>
      <PageSlot location="headerCenter">
        {text.game.round} {round} {text.game.of} {roundMax}
      </PageSlot>
      <div>
        {teamMembers &&
          teamMembers?.map((p, i) => {
            return (
              <Title key={i}>
                {p.name} {text.discuss.ready.ready}
              </Title>
            );
          })}
      </div>
    </Page>
  );
};
