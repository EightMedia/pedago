import { initialViewState, ViewName } from 'models';
import { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import AdminGame from '../../views/admin/Game/AdminGame';
import AdminWizard from '../../views/admin/Wizard/AdminWizard';

function useSocket(url: string): Socket | null {
    const [socket, setSocket] = useState<Socket | null>(null);

    useEffect(() => {
        const socketIo = io(url);

        setSocket(socketIo);

        function cleanup() {
            socketIo.disconnect();
        }
        return cleanup;
    }, []);

    return socket;
}

const AdminMain = () => {
    const socket: Socket | null = useSocket('http://localhost:3001');
    const [view, setView] = useState(initialViewState);

    const handleClick = (value: ViewName): void => {
      (socket as Socket).emit('to', { name: value });
    };

    useEffect(() => {
        if (socket) {
            socket.on('to', setView);
        }
    }, [socket]);

    return (
        <>
            {(() => {
                switch (view.name) {
                    case ViewName.Wizard:
                        return <AdminWizard socket={socket} data={undefined} />;
                    case ViewName.Game:
                        return <AdminGame socket={socket} data={undefined} handleClick={handleClick} />;
                    default:
                        return null;
                }
            })()}
        </>
    );
};

export default AdminMain;
