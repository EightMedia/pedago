import React from "react";
import cx from "classnames";
import styles from "./Wizard.module.css";
import { WizardType } from "./Wizard.types";
import { Page } from "../../../components/Page";
import { Panel } from "../../../components/Panel";
import { Button } from "../../../components/Button";

export const WizardRoomCode = ({
  setStep,
}: {
  setStep: (number: number) => void;
}) => {
  return (
    <>
      <h2>Voer de spelcode </h2>
      <input type="text" />
      <Button onClick={() => setStep(1)}>Volgende</Button>
    </>
  );
};
