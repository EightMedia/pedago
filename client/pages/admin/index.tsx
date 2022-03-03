import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import { initialViewState, ViewName } from "models";
import Wizard from "../../views/admin/Wizard/Wizard";

function useSocket(url: string) {
    const [socket, setSocket] = useState<Socket | null>(null);

    useEffect(() => {
        const socketIo = io(url);

        setSocket(socketIo);

        function cleanup() {
            socketIo.disconnect();
        }
        return cleanup;

        // should only run once and not on every re-render,
        // so pass an empty array
    }, []);

    return socket;
}

const AdminMain = () => {
    const socket: any = useSocket("http://localhost:3001");
    const [view, setView] = useState(initialViewState);

    const handleClick = (value: ViewName): void => {
        socket.emit('to', { name: value })
    }

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
                        return <Wizard socket={socket} data={undefined} />
                    default:
                        return null
                }
            })()}
        </>
    )
}

export default AdminMain;
