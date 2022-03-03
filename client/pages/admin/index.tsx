import Link from "next/link";
import AdminLobby from "./lobby";
import AdminRounds from "./rounds";
import AdminWizard from "./wizard";

const AdminMain = () => {
    return (
        <>
            <Link href="/admin/wizard">Wizard</Link>
            <Link href="/admin/lobby">Lobby</Link>
            <Link href="/admin/rounds">Rounds</Link>
        </>
    )
}

export default AdminMain;