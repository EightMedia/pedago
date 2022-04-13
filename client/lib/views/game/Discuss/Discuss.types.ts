export enum DiscussStep {
  Ready,
  Intro,
  Info,
  Compare,
}

export type DiscussType = {
  round: number;
  roundMax: number;
  initialStep: DiscussStep;
  pause: boolean;
  teamMembers: {
    socketId: string;
    name: string;
    cards: number[];
  }[];
  autoPlay?: boolean;
  handleReady?: () => void;
};

export type DiscussCompareProps = {
  teamMembers: DiscussType["teamMembers"];
  handleReady: () => void;
  round: number;
};
