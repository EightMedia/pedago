import { memo } from "react";
import { GlassPanel } from "../GlassPanel";
import { Player } from "../Player";
import { PlayerCount } from "../PlayerCount";
import { Title } from "../Title";
import styles from "./TeamsList.module.css";
import { TeamsListType } from "./TeamsList.types";

const TeamsListComponent = ({ teams, title, emptyText }: TeamsListType) => {
  if (!teams) return null;
  const playerCount = teams.reduce((acc, team) => acc + team.players.length, 0);
  console.log(teams);
  return (
    <GlassPanel>
      <PlayerCount players={playerCount} />
      <Title>{title}</Title>
      {teams.map((team) => (
        <div key={team.name} className={styles.team}>
          <span className={styles.teamName}>{team.name}</span>
          {team.players.map((player) => (
            <Player name={player} />
          ))}
        </div>
      ))}
      {teams.length === 0 && <p>{emptyText}</p>}
    </GlassPanel>
  );
};

export const TeamsList = memo(TeamsListComponent);
