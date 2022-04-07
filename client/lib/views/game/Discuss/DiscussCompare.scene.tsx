import { useContext } from "react";
import { LanguageContext } from "../../../../contexts/LanguageContext";
import { Button } from "../../../components/Button";
import { Title } from "../../../components/Title";
import { DiscussType } from "./Discuss.types";

export type DiscussCompareProps = {
  teamMembers: DiscussType["teamMembers"];
  handleReady: () => void;
};

export const DiscussCompare = ({ handleReady }: DiscussCompareProps) => {
  const text = useContext(LanguageContext).discuss.compare;
  return (
    <>
      <Title>{text.discussDiff}</Title>
      <>Card</>
      <>Card</>
      <>Card</>
      <>Card</>
      <>Card</>
      <>Card</>
      <Button onClick={handleReady}>{text.ready}</Button>
    </>
  );
};
