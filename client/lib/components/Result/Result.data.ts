import { ResultGroup, ResultSet, ResultStep } from "./Result.types";

// export const ResultDataMe: ResultSet = [16, 29, 36, 5, 13, 9];
export const ResultDataMe: ResultSet = [16, 6, 6, 6, 6, 6];

export const ResultGroup1: ResultGroup = {
  id: "1",
  name: "Hogeschool Rotterdam",
  data: [6, 6, 36, 6, 6, 6],
};

export const ResultGroup2: ResultGroup = {
  id: "2",
  name: "Hogeschool Arnhem en Nijmegen",
  data: [6, 6, 6, 6, 36, 6],
};

export const ResultGroup3: ResultGroup = {
  id: "3",
  name: "Hogeschool Utrecht",
  data: [36, 6, 6, 6, 6, 6],
};

export const ResultData: { autoPlay: boolean; initialStep: ResultStep } = {
  autoPlay: false,
  initialStep: ResultStep.Loader,
};
