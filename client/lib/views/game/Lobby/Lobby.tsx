import { memo, useContext } from "react";
import { LanguageContext } from "../../../../contexts/LanguageContext";
import { Intro } from "../../../components/Intro";
import { Page } from "../../../components/Page";
import { PageSlot } from "../../../components/Page/Page";
import { PlayerGroup } from "../../../components/PlayerGroup";
import { Title } from "../../../components/Title";
import { Stack } from "../../../layouts/Stack";
import { LobbyType } from "./Lobby.types";

const LobbyComponent = ({ round, roundMax, groups, playerName }: LobbyType) => {
  const text = useContext(LanguageContext);

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
        <Stack gap="xs">
          {groups &&
            groups.map((group) => (
              <div key={group.id}>
                <PlayerGroup {...group} />
              </div>
            ))}
        </Stack>
      </PageSlot>
    </Page>
  );
};

export const Lobby = memo(LobbyComponent);
