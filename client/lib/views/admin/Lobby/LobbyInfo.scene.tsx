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
  const text = useContext(LanguageContext).adminLobby.info;

  return (
    <Page background={2}>
      <PageSlot location="headerCenter">
        <Logo />
      </PageSlot>
      <Panel>
        <PanelTitle>{text.title}</PanelTitle>
        <Stack gap="sm">
          {text.items?.map((item, index) => (
            <InfoItem
              key={index}
              icon={item?.icon}
              title={item.caption}
              text={item.text}
            />
          ))}
          <Button onClick={handleClick}>{text.understood}</Button>
        </Stack>
      </Panel>
    </Page>
  );
};
