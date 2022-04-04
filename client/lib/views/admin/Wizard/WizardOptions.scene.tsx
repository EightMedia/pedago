import React from "react";
import { Button } from "../../../components/Button";
import { PanelTitle } from "../../../components/Panel";
import { Center } from "../../../layouts/Center";
import { WizardStep, WizardStepProps } from "./Wizard.types";

export const WizardOptions = ({
  data,
  updateData,
  handleStep,
}: WizardStepProps) => {
  return (
    <>
      <Center>
        <p>Stap 4/4</p>
        <PanelTitle>Extra spelopties</PanelTitle>
      </Center>
      <Button stretch={true} onClick={() => handleStep(WizardStep.Check)}>
        Volgende
      </Button>
      <Button variation="line" onClick={() => handleStep(WizardStep.GameType)}>
        Terug naar de vorige stap
      </Button>
    </>
  );
};
