import { useContext } from "react";
import { LanguageContext } from "../../../../contexts/LanguageContext";
import { Button } from "../../../components/Button";
import { InfoItem } from "../../../components/InfoItem";
import { Logo } from "../../../components/Logo";
import { Page } from "../../../components/Page";
import { PageSlot } from "../../../components/Page/Page";
import { Panel, PanelTitle } from "../../../components/Panel";
import { Stack } from "../../../layouts/Stack";

export const LobbyInfo = ({ handleClick }: { handleClick: () => void }) => {
  const { text } = useContext(LanguageContext);

  return (
    <Page background={2}>
      <PageSlot location="headerCenter">
        <Logo />
      </PageSlot>
      <Panel>
        <PanelTitle>{text.adminLobby.info.title}</PanelTitle>
        <Stack gap="sm">
          {text.adminLobby.info.items?.map((item, index) => (
            <InfoItem
              key={index}
              icon={item?.icon}
              title={item.caption}
              text={item.text}
            />
          ))}
          <Button onClick={handleClick}>{text.adminLobby.info.understood}</Button>
        </Stack>
      </Panel>
    </Page>
  );
};
