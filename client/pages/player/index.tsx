import PlayerLobby from "./lobby";
import PlayerRounds from "./rounds";
import PlayerWizard from "./wizard";

const PlayerIndex = () => {
    return (
        <>
            <PlayerLobby></PlayerLobby>
            <PlayerRounds></PlayerRounds>
            <PlayerWizard></PlayerWizard>
        </>
    )
}

export default PlayerIndex;