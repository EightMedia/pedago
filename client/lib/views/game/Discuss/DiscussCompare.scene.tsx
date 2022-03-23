import { useContext } from "react";
import { LanguageContext } from "../../../../contexts/LanguageContext";
import { Button } from "../../../components/Button";
import { DiscussType } from "./Discuss.types";

export type DiscussCompareProps = {
  teamMembers: DiscussType["teamMembers"];
  handleReady: DiscussType["handleReady"];
};

export const DiscussCompare = ({ handleReady }: DiscussCompareProps) => {
  const data = useContext(LanguageContext);
  return (
    <>
      <p>todo: kaartjes</p>
      <Button onClick={handleReady}>{data.discuss.ready}</Button>
    </>
  );
};
