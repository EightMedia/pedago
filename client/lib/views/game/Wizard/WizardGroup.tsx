import React from "react";
import cx from "classnames";
import styles from "./Wizard.module.css";
import { WizardType } from "./Wizard.types";
import { Page } from "../../../components/Page";
import { Panel } from "../../../components/Panel";
import { Group } from "models";
import { Button } from "../../../components/Button";

export const WizardGroup = ({
  groups,
  setStep,
}: {
  groups: any;
  setStep: (number: number) => void;
}) => {
  return (
    <>
      <h2>Kies je groep</h2>
      {groups.map((item: Group) => (
        <Button key={item.id} onClick={() => setStep(3)}>
          {item.name}
        </Button>
      ))}
    </>
  );
};
