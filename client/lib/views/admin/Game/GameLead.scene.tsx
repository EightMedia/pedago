import { useContext } from "react";
import { LanguageContext } from "../../../../contexts/LanguageContext";
import { Page } from "../../../components/Page";
import { Title } from "../../../components/Title";
import { timedCallback } from "../../../utils/timedCallback.util";

export type GameLeadProps = {
  round: number;
  roundMax: number;
  callback?: () => void;
};

export const GameLead = ({ round, roundMax, callback }: GameLeadProps) => {
  const text = useContext(LanguageContext).adminGame.lead;

  if (callback) {
    timedCallback(3, callback);
  }
  return (
    <Page>
      <Title>
        {text.continuing} {round} {text.of} {roundMax}
      </Title>
    </Page>
  );
};
