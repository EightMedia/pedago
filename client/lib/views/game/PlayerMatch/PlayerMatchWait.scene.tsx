import { memo, useContext } from "react";
import { LanguageContext } from "../../../../contexts/LanguageContext";
import { Page } from "../../../components/Page";
import { Panel, PanelTitle } from "../../../components/Panel";
import { Center } from "../../../layouts/Center";
import { Stack } from "../../../layouts/Stack";
import { PlayerMatchType } from "./PlayerMatch.types";

const PlayerMatchWaitComponent = ({
  round,
  roundMax
}: PlayerMatchType) => {
  const data = useContext(LanguageContext);

  return (
    <Page valign="center">
      <div>
        Ronde {round} van {roundMax}
      </div>
      <Panel>
        <PanelTitle>{data.playerMatch.youPlayWith}</PanelTitle>
        <Stack>Je speelt met...</Stack>
        <Center space="sm">
          <p>Nog even wachten tot iedereen klaar is</p>
        </Center>
      </Panel>
    </Page>
  );
};

export const PlayerMatchWaitScene = memo(PlayerMatchWaitComponent);
