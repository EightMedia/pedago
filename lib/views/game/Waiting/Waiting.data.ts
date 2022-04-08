import { WaitingType } from "./Waiting.types";

export const WaitingDataOneCompanion: WaitingType = {
  round: 1,
  roundMax: 6,
  teamMembers: ["Jos"],
  backToSort: function (): void {
    alert("back to sort");
  },
};

export const WaitingDataTwoCompanions: WaitingType = {
  round: 1,
  roundMax: 6,
  teamMembers: ["Jos", "Esmee"],
  backToSort: function (): void {
    alert("back to sort");
  },
};
