import { useContext } from "react";
import { LanguageContext } from "../../../../contexts/LanguageContext";
import { Title } from "../../../components/Title";
import { timedCallback } from "../../../utils/timedCallback.util";
import { DiscussType } from "./Discuss.types";

export type DiscussIntroProps = {
  time: number;
  callback?: () => void;
  teamMembers: DiscussType["teamMembers"];
};

export const DiscussIntro = ({
  time = 3,
  callback,
  teamMembers,
}: DiscussIntroProps) => {
  timedCallback(time, callback);
  const text = useContext(LanguageContext).discuss.intro;
  const names = teamMembers?.map((p) => p.name);
  return (
    <>
      <Title>
        {text.discussDiff}{" "}
        {names?.length > 1 ? names?.join(" and ") : names.join()}
      </Title>
      ;
    </>
  );
};
