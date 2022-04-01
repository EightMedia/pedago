export enum ResultStep {
  Loader,
  Result,
}

export type ResultSet = [number, number, number, number, number, number];

export type ResultGroup = {
  id: string;
  name: string;
  data: ResultSet;
};

export type ResultType = {
  initialStep: ResultStep;
  autoPlay?: boolean;
  data: {
    me?: ResultSet;
    groups: ResultGroup[];
  };
};
