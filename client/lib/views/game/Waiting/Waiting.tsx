import { memo, useContext } from "react";
import { LanguageContext } from "../../../../contexts/LanguageContext";
import { Button } from "../../../components/Button";
import { Loader } from "../../../components/Loader";
import { Page } from "../../../components/Page";
import { Panel, PanelTitle } from "../../../components/Panel";
import { Center } from "../../../layouts/Center";
import { WaitingType } from "./Waiting.types";

const WaitingComponent = ({
  round,
  roundMax,
  teamMembers,
  backToSort,
}: WaitingType) => {
  const data = useContext(LanguageContext);
  const t = data.waiting;
  return (
    <Page valign="center">
      <div>
        {data.game.round} {round} {data.game.of} {roundMax}
      </div>
      <Panel>
        <Loader />
        <PanelTitle>{t.goodBusy}</PanelTitle>
        {teamMembers?.length > 1 && (
          <p>
            {t.waiting} {teamMembers.join(" " + t.and + " ")} {t.areReady}
          </p>
        )}
        {teamMembers?.length == 1 && (
          <p>
            {t.waiting} {teamMembers.join()} {t.isReady}
          </p>
        )}
        <Center>
          <Button onClick={backToSort} variation="line">
            {t.changeSomething}
          </Button>
        </Center>
      </Panel>
    </Page>
  );
};

export const Waiting = memo(WaitingComponent);
