import { memo } from "react";
import { Stack } from "../../layouts/Stack";
import { GlassPanel } from "../GlassPanel";
import { Player } from "../Player";
import { PlayerCount } from "../PlayerCount";
import { Title } from "../Title";
import styles from "./TeamsList.module.css";
import { TeamsListType } from "./TeamsList.types";

const TeamsListComponent = ({ teams, title, emptyText }: TeamsListType) => {
  if (!teams) return null;
  const playerCount = teams.reduce((acc, team) => acc + team.players.length, 0);
  return (
    <GlassPanel>
      <Stack gap="3xs" align="center">
        <PlayerCount players={playerCount} />
        <Title>{title}</Title>
      </Stack>
      {teams.map((team) => (
        <div key={team.name} className={styles.team}>
          <h3 className={styles.teamNameTitle}>
            <span className={styles.teamName}>{team.name}</span>
          </h3>
          {team.players.map((player, i) => (
            <Player key={i} name={player} />
          ))}
        </div>
      ))}
      {teams?.length === 0 && <p>{emptyText}</p>}
    </GlassPanel>
  );
};

export const TeamsList = memo(TeamsListComponent);
