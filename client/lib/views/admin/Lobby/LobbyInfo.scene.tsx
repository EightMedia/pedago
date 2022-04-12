import { useContext } from "react";
import { LanguageContext } from "../../../../contexts/LanguageContext";
import { Button } from "../../../components/Button";
import { IconsEnum } from "../../../components/Icon/Icon";
import { InfoItem } from "../../../components/InfoItem";
import { Logo } from "../../../components/Logo";
import { Page } from "../../../components/Page";
import { PageSlot } from "../../../components/Page/Page";
import { Panel, PanelTitle } from "../../../components/Panel";
import { Stack } from "../../../layouts/Stack";

export const LobbyInfo = ({ handleClick }: { handleClick: () => void }) => {
  const text = useContext(LanguageContext).adminLobby.info;

  return (
    <Page background={2}>
      <PageSlot location="headerCenter">
        <Logo />
      </PageSlot>
      <Panel>
        <PanelTitle>{text.title}</PanelTitle>
        <Stack>
          {text.items.map((item, index) => (
            <InfoItem
              key={index}
              icon={IconsEnum.Info}
              title={item.caption}
              text={item.text}
            />
          ))}
        </Stack>
        <Button onClick={handleClick}>{text.understood}</Button>
      </Panel>
    </Page>
  );
};
