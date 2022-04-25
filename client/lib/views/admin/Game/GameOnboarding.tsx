import { useContext } from "react";
import { LanguageContext } from "../../../../contexts/LanguageContext";
import { Button } from "../../../components/Button";
import { InfoItem } from "../../../components/InfoItem";
import { Logo } from "../../../components/Logo";
import { Page } from "../../../components/Page";
import { PageSlot } from "../../../components/Page/Page";
import { Panel, PanelTitle } from "../../../components/Panel";
import { Stack } from "../../../layouts/Stack";

export type GameOnboardingProps = {
  title: string;
};

export const GameInfo = ({ title }: { title: string }) => {
  const text = useContext(LanguageContext).adminLobby.info;
  return (
    <>
      <PanelTitle>{title}</PanelTitle>
      <Stack>
        {text.items.map((item, index) => (
          <InfoItem
            key={index}
            icon={item.icon}
            title={item.caption}
            text={item.text}
          />
        ))}
      </Stack>
    </>
  );
};

export const GameOnboarding = ({ handleOk }: { handleOk: () => void }) => {
  const text = useContext(LanguageContext).adminLobby.info;
  return (
    <Page>
      <PageSlot location="headerCenter">
        <Logo />
      </PageSlot>
      <Panel>
        <GameInfo title={text.title} />
        <Button onClick={handleOk}>Ik snap het</Button>
      </Panel>
    </Page>
  );
};
