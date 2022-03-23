export type PlayerMatchType = {
  round: number;
  roundMax: number;
  teamName: string;
  teamMembers: {
    name: string;
    group: string;
  }[];
};
