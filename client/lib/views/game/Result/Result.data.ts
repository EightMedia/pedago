import { ResultStep, ResultType } from "./Result.types";

export const ResultData: ResultType = {
  pause: true,
  initialStep: ResultStep.Loader,
  data: {
    me: [16, 29, 36, 5, 13, 9],
    total: [8, 10, 17, 20, 19, 12],
  },
};

export const ResultDataGroups: ResultType = {
  initialStep: ResultStep.Loader,
  data: {
    me: [16, 29, 36, 5, 13, 9],
    total: [8, 10, 17, 20, 19, 12],
    groups: [
      {
        id: "1",
        name: "Hogeschool Rotterdam",
        data: [5, 35, 29, 26, 6, 14],
      },
      {
        id: "2",
        name: "Hogeschool Arnhem en Nijmegen",
        data: [18, 7, 32, 21, 8, 23],
      },
    ],
  },
};
