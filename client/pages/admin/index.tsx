import AdminLobby from "./lobby";
import AdminRounds from "./rounds";
import AdminWizard from "./wizard";

const AdminMain = () => {
    return (
        <>
            <AdminWizard></AdminWizard>
            <AdminLobby></AdminLobby>
            <AdminRounds></AdminRounds>
        </>
    )
}

export default AdminMain;