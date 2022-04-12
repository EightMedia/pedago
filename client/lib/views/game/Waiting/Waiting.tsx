import { memo, useContext } from "react";
import { LanguageContext } from "../../../../contexts/LanguageContext";
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
  const text = useContext(LanguageContext);
  const waitingText = text.waiting;

  return (
    <Page>
      <div>
        {text.game.round} {round} {text.game.of} {roundMax}
      </div>
      <Panel>
        <Center>
          <Loader />
          <PanelTitle space="sm">{waitingText.goodBusy}</PanelTitle>
          <Stack>
            {teamMembers?.length > 1 && (
              <Text tone="light">
                {waitingText.waiting}{" "}
                {teamMembers.join(" " + waitingText.and + " ")}{" "}
                {waitingText.areReady}
              </Text>
            )}
            {teamMembers?.length === 1 && (
              <Text tone="light">
                {waitingText.waiting} {teamMembers.join()} {waitingText.isReady}
              </Text>
            )}
            <Button onClick={backToSort as () => void} variation="line">
              {waitingText.changeSomething}
            </Button>
          </Stack>
        </Center>
      </Panel>
    </Page>
  );
};

export const Waiting = memo(WaitingComponent);
