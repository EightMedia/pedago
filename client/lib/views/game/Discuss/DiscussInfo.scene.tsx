import { useContext } from "react";
import { LanguageContext } from "../../../../contexts/LanguageContext";
import { Button } from "../../../components/Button";
import { Panel, PanelTitle } from "../../../components/Panel";

export type DiscussInfoProps = {
  handleBack: () => void;
};

export const DiscussInfo = ({ handleBack }: DiscussInfoProps) => {
  const text = useContext(LanguageContext).discuss.info;
  return (
    <Panel>
      <PanelTitle>{text.discussDiff}</PanelTitle>
      <>DiscussInfoItem</>
      <>DiscussInfoItem</>
      <>DiscussInfoItem</>
      <>DiscussInfoItem</>
      <>DiscussInfoItem</>
      <Button onClick={handleBack}>{text.ready}</Button>
    </Panel>
  );
};
