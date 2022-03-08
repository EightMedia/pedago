import { Group } from "models";
import { ViewName } from "models/lib/models/view-state.interface";

export type WizardType = {
  handleEmit: (vn: ViewName) => void;
  groups: Group[];
  initialStep?: number;
};
