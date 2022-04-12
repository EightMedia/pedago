import { useContext } from "react";
import { LanguageContext } from "../../../../contexts/LanguageContext";
import { Button } from "../../../components/Button";
import { IconsEnum } from "../../../components/Icon/Icon";
import { InfoItem } from "../../../components/InfoItem";
import { Page } from "../../../components/Page";
import { PageSlot } from "../../../components/Page/Page";
import { Panel, PanelTitle } from "../../../components/Panel";
import { Timer } from "../../../components/Timer";
import { Stack } from "../../../layouts/Stack";

export type DiscussInfoProps = {
  handleBack: () => void;
  round: number;
  roundMax: number;
};

export const DiscussInfo = ({
  handleBack,
  round,
  roundMax,
}: DiscussInfoProps) => {
  const text = useContext(LanguageContext);
  return (
    <Page valign="center">
      <PageSlot location="headerLeft">
        <Timer time={600} />
      </PageSlot>
      <PageSlot location="headerCenter">
        {text.game.round} {round} {text.game.of} {roundMax}
      </PageSlot>
      <PageSlot location="body">
        <Panel>
          <PanelTitle>{text.discuss.info.discussDiff}</PanelTitle>
          <Stack>
            {text.discuss.intro.items.map((item, i) => (
              <InfoItem
                key={i}
                icon={IconsEnum.Info}
                title={item.caption}
                text={item.text}
              />
            ))}
          </Stack>
          <Button onClick={handleBack}>{text.discuss.info.understood}</Button>
        </Panel>
      </PageSlot>
    </Page>
  );
};
