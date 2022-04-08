import { useContext } from "react";
import { LanguageContext } from "../../../../contexts/LanguageContext";
import { Page } from "../../../components/Page";
import { Title } from "../../../components/Title";
import { TimedCallback } from "../../../utils/timedCallback.util";

export type GameLeadProps = {
  round: number;
  roundMax: number;
  callback?: () => void;
};

export const GameLead = ({ round, roundMax, callback }: GameLeadProps) => {
  const text = useContext(LanguageContext).adminGame.lead;

  if (callback) {
    TimedCallback(3, callback);
  }
  return (
    <Page>
      <Title>
        {text.continuing} {round} {text.of} {roundMax}
      </Title>
    </Page>
  );
};
