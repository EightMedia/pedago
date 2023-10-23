import { Button } from "@components/Button";
import { InfoItem } from "@components/InfoItem";
import { Logo } from "@components/Logo";
import { Page } from "@components/Page";
import { PageSlot } from "@components/Page/Page";
import { Panel, PanelTitle } from "@components/Panel";
import { LanguageContext } from "@contexts/LanguageContext";
import { Stack } from "@layouts/Stack";
import { useContext } from "react";

export type GameOnboardingProps = {
  title: string;
};

export const GameInfo = ({ title }: { title: string }) => {
  const { text } = useContext(LanguageContext);
  return (
    <>
      <PanelTitle>{title}</PanelTitle>
      <Stack>
        {text.adminLobby.info.items?.map((item, index) => (
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
  const { text } = useContext(LanguageContext);
  return (
    <Page>
      <PageSlot location="headerCenter">
        <Logo />
      </PageSlot>
      <Panel>
        <GameInfo title={text.adminLobby.info.title} />
        <Button onClick={handleOk}>Ik snap het</Button>
      </Panel>
    </Page>
  );
};
