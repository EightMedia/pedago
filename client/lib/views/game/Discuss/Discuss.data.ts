import { DiscussStep, DiscussType } from "./Discuss.types";

export const DiscussDataOneCompanion: DiscussType = {
  autoPlay: false,
  round: 1,
  roundMax: 6,
  initialStep: DiscussStep.Ready,
  pause: true,
  discussInfoSeen: false,
  teamMembers: [
    {
      socketId: "",
      name: "My Name",
      cards: [3, 0, 2, 1, 4, 5],
    },
    {
      socketId: "",
      name: "Vincent",
      cards: [5, 2, 1, 4, 3, 0],
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
  discussInfoSeen: false,
  teamMembers: [
    {
      socketId: "",
      name: "My Name",
      cards: [3, 0, 2, 1, 4, 5],
    },
    {
      socketId: "",
      name: "Esmee",
      cards: [5, 2, 1, 4, 3, 0],
    },
    {
      socketId: "",
      name: "Vincent",
      cards: [4, 2, 0, 5, 3, 1],
    },
  ],
  handleReady: () => {
    alert("handleReady");
  },
};
