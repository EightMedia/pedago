import { useContext } from "react";
import { LanguageContext } from "../../../../contexts/LanguageContext";
import { Page } from "../../../components/Page";
import { PageSlot } from "../../../components/Page/Page";
import { Timer } from "../../../components/Timer";
import { Title } from "../../../components/Title";
import { TimedCallback } from "../../../utils/timedCallback.util";
import { DiscussType } from "./Discuss.types";

export type DiscussIntroProps = {
  time: number;
  callback?: () => void;
  teamMembers: DiscussType["teamMembers"];
  round: number;
  roundMax: number;
};

export const DiscussIntro = ({
  time = 3,
  callback,
  teamMembers,
  round,
  roundMax,
}: DiscussIntroProps) => {
  TimedCallback(time, callback);
  const text = useContext(LanguageContext);
  const names = teamMembers?.map((p) => p.name);
  return (
    <Page valign="center">
      <PageSlot location="headerLeft">
        <Timer time={600} />
      </PageSlot>
      <PageSlot location="headerCenter">
        {text.game.round} {round} {text.game.of} {roundMax}
      </PageSlot>
      <Title>
        {text.discuss.intro.discussDiff}{" "}
        {names?.length > 1 ? names?.join(" and ") : names.join()}
      </Title>
    </Page>
  );
};
