import { useContext } from "react";
import { LanguageContext } from "../../../../contexts/LanguageContext";
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
  const text = useContext(LanguageContext).discuss.ready;
  return (
    <>
      {teamMembers &&
        teamMembers?.map((p, i) => {
          return <Title key={i}>{p.name} {text.ready}</Title>;
        })}
    </>
  );
};
