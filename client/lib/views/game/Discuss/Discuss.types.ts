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
    name: string;
    cards: number[];
  }[];
  handleReady: () => void;
  autoPlay?: boolean;
};
