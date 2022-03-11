import { memo } from "react";
import { Page } from "../../../components/Page";
import { Panel, PanelTitle } from "../../../components/Panel";
import { WizardType } from "./Wizard.types";

export const WizardComponent = ({}: WizardType) => {
  return (
    <Page>
      <Panel>
        <PanelTitle>Wizard</PanelTitle>
      </Panel>
    </Page>
  );
};

export const Wizard = memo(WizardComponent);
