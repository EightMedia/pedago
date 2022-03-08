import React from "react";
import cx from "classnames";
import styles from "./Wizard.module.css";
import { WizardType } from "./Wizard.types";

export const WizardComponent = ({}: WizardType) => {
  return (
    <div className={cx("Wizard", styles.Wizard)}>
      <h2>Wizard</h2>
    </div>
  );
};

export const Wizard = React.memo(WizardComponent);
