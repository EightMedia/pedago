import { DiscussStep, DiscussType } from "./Discuss.types";

export const DiscussDataOneCompanion: DiscussType = {
  autoPlay: false,
  round: 1,
  roundMax: 6,
  initialStep: DiscussStep.Ready,
  pause: true,
  teamMembers: [
    {
      socketId: "",
      name: "My Name",
      cards: [4, 1, 3, 2, 5, 6],
    },
    {
      socketId: "",
      name: "Vincent",
      cards: [6, 3, 2, 5, 4, 1],
    },
  ],
  handleReady: () => {
    alert("handleReady");
  },
};

export const DiscussDataTwoCompanions: DiscussType = {
  autoPlay: false,
  round: 1,
  roundMax: 6,
  initialStep: DiscussStep.Ready,
  pause: true,
  teamMembers: [
    {
      socketId: "",
      name: "My Name",
      cards: [4, 1, 3, 2, 5, 6],
    },
    {
      socketId: "",
      name: "Esmee",
      cards: [6, 3, 2, 5, 4, 1],
    },
    {
      socketId: "",
      name: "Vincent",
      cards: [5, 3, 1, 6, 4, 2],
    },
  ],
  handleReady: () => {
    alert("handleReady");
  },
};
