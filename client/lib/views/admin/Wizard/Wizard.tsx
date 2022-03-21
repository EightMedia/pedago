import { memo } from "react";
import { Page } from "../../../components/Page";
import { Panel, PanelTitle } from "../../../components/Panel";
import { WizardType } from "./Wizard.types";

const WizardComponent = ({ handleRegisterGame }: WizardType) => {
  return (
    <Page>
      <Panel>
        <PanelTitle>Wizard</PanelTitle>
        <button onClick={handleRegisterGame}>Start game</button>
      </Panel>
    </Page>
  );
};

export const Wizard = memo(WizardComponent);
