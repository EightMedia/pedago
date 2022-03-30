import { Page } from "../../../components/Page";
import { Title } from "../../../components/Title";
import { timedCallback } from "../../../utils/timedCallback.util";

export type GameLeadProps = {
  round: number;
  roundMax: number;
  callback?: () => void;
};

export const GameLead = ({ round, roundMax, callback }: GameLeadProps) => {
  if (callback) {
    timedCallback(3, callback);
  }
  return (
    <Page>
      <Title>
        Door naar ronde {round} van {roundMax}
      </Title>
    </Page>
  );
};
