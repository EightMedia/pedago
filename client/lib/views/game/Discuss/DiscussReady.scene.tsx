import { Title } from "../../../components/Title";
import { timedCallback } from "../../../utils/timedCallback.util";
import { DiscussType } from "./Discuss.types";

export type DiscussReadyProps = {
  teamMembers: DiscussType["teamMembers"];
  time: number;
  callback?: () => void;
};

export const DiscussReady = ({
  time = 3,
  callback,
  teamMembers,
}: DiscussReadyProps) => {
  timedCallback(time, callback);
  return <Title>ARIE-JAN-HENK is klaar</Title>;
};
