import React from "react";
import cx from "classnames";
import styles from "./Wizard.module.css";
import { WizardType } from "./Wizard.types";
import { Page } from "../../../components/Page";
import { Panel } from "../../../components/Panel";
import { Button } from "../../../components/Button";
import { PanelTitle } from "../../../components/Panel/Panel";

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
