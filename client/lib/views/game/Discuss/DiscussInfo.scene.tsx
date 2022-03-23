import { Button } from "../../../components/Button";
import { Panel, PanelTitle } from "../../../components/Panel";

export type DiscussInfoProps = {
  handleBack: () => void;
};

export const DiscussInfo = ({ handleBack }: DiscussInfoProps) => {
  return (
    <Panel>
      <PanelTitle>Info</PanelTitle>
      <p>todo: infotekst</p>
      <Button onClick={handleBack}>Ik snap het</Button>
    </Panel>
  );
};
