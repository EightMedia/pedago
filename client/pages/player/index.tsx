import Link from "next/link";
import PlayerLobby from "./lobby";
import PlayerRounds from "./rounds";
import PlayerWizard from "./wizard";

const PlayerIndex = () => {
    return (
        <>
            <Link href="/player/wizard">Wizard</Link>
            <Link href="/player/lobby">Lobby</Link>
            <Link href="/player/rounds">Rounds</Link>
        </>
    )
}

export default PlayerIndex;