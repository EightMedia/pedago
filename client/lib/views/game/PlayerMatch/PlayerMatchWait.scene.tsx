import { memo, useContext } from "react";
import { LanguageContext } from "../../../../contexts/LanguageContext";
import { Panel, PanelTitle } from "../../../components/Panel";
import { Timer } from "../../../components/Timer";
import { Center } from "../../../layouts/Center";
import { Stack } from "../../../layouts/Stack";
import { PlayerMatchType } from "./PlayerMatch.types";

const PlayerMatchWaitComponent = ({ round, roundMax }: PlayerMatchType) => {
  const text = useContext(LanguageContext);

  return (
    <>
      <Timer time={600} />
      <div>
        {text.game.round} {round} {text.game.of} {roundMax}
      </div>
      <Panel>
        <PanelTitle>{text.playerMatch.youPlayWith}</PanelTitle>
        <Stack>{text.playerMatch.waitForOthers}</Stack>
        <Center space="sm">
          <p>{text.playerMatch.waitUntil}</p>
        </Center>
      </Panel>
    </>
  );
};

export const PlayerMatchWaitScene = memo(PlayerMatchWaitComponent);
