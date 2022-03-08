import React from "react";
import { Button } from "../../../components/Button";
import { PanelTitle } from "../../../components/Panel/Panel";

export const WizardName = ({
  setStep,
}: {
  setStep: (number: number) => void;
}) => {
  return (
    <>
      <PanelTitle>Jouw voornaam</PanelTitle>
      <p>Anderen zien dan met wie ze spelen</p>
      <input type="text" />
      <Button onClick={() => setStep(2)}>Volgende</Button>
    </>
  );
};
