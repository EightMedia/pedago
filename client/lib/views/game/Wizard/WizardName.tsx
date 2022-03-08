import React from "react";
import cx from "classnames";
import styles from "./Wizard.module.css";
import { WizardType } from "./Wizard.types";
import { Page } from "../../../components/Page";
import { Panel } from "../../../components/Panel";
import { Button } from "../../../components/Button";

export const WizardName = ({
  setStep,
}: {
  setStep: (number: number) => void;
}) => {
  return (
    <>
      <h2>Jouw voornaam</h2>
      <p>Anderen zien dan met wie ze spelen</p>
      <input type="text" />
      <Button onClick={() => setStep(2)}>Volgende</Button>
    </>
  );
};
