import { Title } from "../../../components/Title";
import { timedCallback } from "../../../utils/timedCallback.util";

export type DiscussIntroProps = {
  time: number;
  callback?: () => void;
};

export const DiscussIntro = ({ time = 3, callback }: DiscussIntroProps) => {
  timedCallback(time, callback);
  return <Title>intro</Title>;
};
