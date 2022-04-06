import { memo, useContext } from "react";
import { LanguageContext } from "../../../../contexts/LanguageContext";
import { SocketContext } from "../../../../contexts/SocketContext";
import { Button } from "../../../components/Button";
import { Loader } from "../../../components/Loader";
import { Page } from "../../../components/Page";
import { Panel, PanelTitle } from "../../../components/Panel";
import { Text } from "../../../components/Text";
import { Center } from "../../../layouts/Center";
import { Stack } from "../../../layouts/Stack";
import { WaitingType } from "./Waiting.types";

const WaitingComponent = ({
  round,
  roundMax,
  teamMembers,
  backToSort,
}: WaitingType) => {
  const data = useContext(LanguageContext);
  const t = data.waiting;
  const socket = useContext(SocketContext);

  return (
    <Page valign="center">
      <div>
        {data.game.round} {round} {data.game.of} {roundMax}
      </div>
      <Panel>
        <Center>
          <Loader />
          <PanelTitle space="sm">{t.goodBusy}</PanelTitle>
          <Stack>
            {teamMembers?.length > 1 && (
              <Text tone="light">
                {t.waiting} {teamMembers.join(" " + t.and + " ")} {t.areReady}
              </Text>
            )}
            {teamMembers?.length === 1 && (
              <Text tone="light">
                {t.waiting} {teamMembers.join()} {t.isReady}
              </Text>
            )}
            <Button onClick={backToSort} variation="line">
              {t.changeSomething}
            </Button>
          </Stack>
        </Center>
      </Panel>
    </Page>
  );
};

export const Waiting = memo(WaitingComponent);
