import { useContext } from "react";
import { LanguageContext } from "../../../../contexts/LanguageContext";
import { Button } from "../../../components/Button";
import { Page } from "../../../components/Page";
import { Panel, PanelTitle } from "../../../components/Panel";

export const LobbyInfo = ({ handleClick }: { handleClick: () => void }) => {
  const text = useContext(LanguageContext).adminLobby.info;

  return (
    <Page background={2} valign="center">
      <Panel>
        <PanelTitle>{text.title}</PanelTitle>
        <div>
          {text.items[0].caption}
          {text.items[0].text}
        </div>
        <div>
          {text.items[1].caption}
          {text.items[1].text}
        </div>
        <div>
          {text.items[2].caption}
          {text.items[2].text}
        </div>
        <div>
          {text.items[3].caption}
          {text.items[3].text}
        </div>
        <div>
          {text.items[4].caption}
          {text.items[4].text}
        </div>
        <div>
          {text.items[5].caption}
          {text.items[5].text}
        </div>
        <div>
          {text.items[6].caption}
          {text.items[6].text}
        </div>
        <Button onClick={handleClick}>{text.understood}</Button>
      </Panel>
    </Page>
  );
};
