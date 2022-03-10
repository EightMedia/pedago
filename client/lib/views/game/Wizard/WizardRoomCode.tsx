import React from "react";
import { Button } from "../../../components/Button";
import { PanelTitle } from "../../../components/Panel";

export const WizardRoomCode = ({
  setStep,
}: {
  setStep: (number: number) => void;
}) => {
  return (
    <>
      <PanelTitle>Voer de spelcode in</PanelTitle>
      <input type="text" />
      <Button onClick={() => setStep(1)}>Volgende</Button>
    </>
  );
};
