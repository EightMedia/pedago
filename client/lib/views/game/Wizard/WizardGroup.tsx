import React from "react";
import { Group } from "models";
import { Button } from "../../../components/Button";
import { PanelTitle } from "../../../components/Panel";

export const WizardGroup = ({
  groups,
  setStep,
}: {
  groups: any;
  setStep: (number: number) => void;
}) => {
  return (
    <>
      <PanelTitle>Kies je groep</PanelTitle>
      {groups.map((item: Group) => (
        <Button key={item.id} onClick={() => setStep(3)}>
          {item.name}
        </Button>
      ))}
    </>
  );
};
