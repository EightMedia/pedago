export enum ResultStep {
  Loader,
  Result,
}

export type ResultType = {
  initialStep: ResultStep;
  autoPlay?: boolean;
  data: {
    me: number[];
    total: number[];
    groups?: {
      id: string;
      name: string;
      data: number[];
    }[];
  };
};
