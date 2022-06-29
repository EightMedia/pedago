export enum DiscussStep {
  Ready,
  Intro,
  Info,
  Compare,
}

interface TeamMember {
  socketId: string;
  name: string;
  cards: number[];
}

export type DiscussType = {
  round: number;
  roundMax: number;
  initialStep: DiscussStep;
  pause: boolean;
  teamMembers: TeamMember[] | null;
  autoPlay?: boolean;
  discussInfoSeen: boolean;
  handleReady?: () => void;
};

export type DiscussCompareProps = {
  teamMembers: TeamMember[] | null;
  handleReady: () => void;
  round: number;
};
