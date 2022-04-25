import { memo, useContext } from "react";
import { LanguageContext } from "../../../../contexts/LanguageContext";
import { Intro } from "../../../components/Intro";
import { Page } from "../../../components/Page";
import { PageSlot } from "../../../components/Page/Page";
import { PanelGroup } from "../../../components/PanelGroup";
import { PlayerGroup } from "../../../components/PlayerGroup";
import { Title } from "../../../components/Title";
import { LobbyType } from "./Lobby.types";

const LobbyComponent = ({ round, roundMax, groups, playerName }: LobbyType) => {
  const { text } = useContext(LanguageContext);

  return (
    <Page background={2}>
      <PageSlot location="headerCenter">
        {text.game.round} {round} {text.game.of} {roundMax}
      </PageSlot>
      <PageSlot location="body">
        <Title>
          {text.gameLobby.hi} {playerName}!
          <br />
          {text.gameLobby.willStart}
        </Title>
        <Intro> {text.gameLobby.waiting}</Intro>
        <PanelGroup>
          {groups &&
            groups.map((group) => (
              <PlayerGroup
                key={group.id}
                {...group}
                counter={false}
                handleGroupChange={() => alert("not implemented yet")}
              />
            ))}
        </PanelGroup>
      </PageSlot>
    </Page>
  );
};

export const Lobby = memo(LobbyComponent);
