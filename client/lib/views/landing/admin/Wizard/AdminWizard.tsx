import { Socket } from "socket.io-client";

const AdminWizard = ({ socket, data }: { socket: Socket | null; data: any }) => {
    // back to start
    const resetEveryone = () => {
        (socket as Socket).emit('reset');
    };

    // end the party
    const killRoom = () => {
        (socket as Socket).emit('killRoom', data.room);
    };

    return (
        <div>
            <h1>Admin dashboard for room "{data?.room || 'black hole'}"!</h1>
            <section>
                <h2>Hello superboss! 🤠</h2>
                <button onClick={resetEveryone}>🎬 Reset everyone</button>
                <button onClick={killRoom}>☠️ Kill room</button>
            </section>
        </div>
    );
};
export default AdminWizard;
