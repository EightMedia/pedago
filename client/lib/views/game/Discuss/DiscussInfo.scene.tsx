import { Button } from "@components/Button";
import { IconsEnum } from "@components/Icon/Icon";
import { InfoItem } from "@components/InfoItem";
import { Page } from "@components/Page";
import { PageSlot } from "@components/Page/Page";
import { Panel, PanelTitle } from "@components/Panel";
import { Timer } from "@components/Timer";
import { Stack } from "@layouts/Stack";
import { useContext } from "react";
import { LanguageContext } from "../../../../contexts/LanguageContext";
import { RoomContext } from "../../../../contexts/RoomContext";
import { TimerContext } from "../../../../contexts/TimerContext";

const icons: IconsEnum[] = [
  IconsEnum.Columns,
  IconsEnum.Important,
  IconsEnum.Ask,
  IconsEnum.Check,
  IconsEnum.Person,
];

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
  const { text } = useContext(LanguageContext);
  const timer = useContext(TimerContext);
  const room = useContext(RoomContext);

  return (
    <Page valign="center">
      <PageSlot location="headerLeft">
        {(room?.options?.timer as boolean) && <Timer time={timer} />}
      </PageSlot>
      <PageSlot location="headerCenter">
        {text.game.round} {round} {text.game.of} {roundMax}
      </PageSlot>
      <PageSlot location="body">
        <Panel>
          <PanelTitle>{text.discuss.info.discussDiff}</PanelTitle>
          <Stack gap="md">
            {text.discuss.intro.items.map((item, i) => (
              <InfoItem
                key={i}
                icon={icons[i]}
                title={item.caption}
                text={item.text}
              />
            ))}
            <Button stretch onClick={handleBack}>
              {text.discuss.info.understood}
            </Button>
          </Stack>
        </Panel>
      </PageSlot>
    </Page>
  );
};
