import { Group } from "models";
import { ViewName } from "models/lib/models/view-state.interface";

export type WizardType = {
  handleClick: (vn: ViewName) => void;
  groups: Group[];
  initialStep?: number;
};
