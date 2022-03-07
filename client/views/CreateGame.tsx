import { useState } from 'react';

const CreateGame = ({ socket }: { socket: any }) => {
    const [createRoomName, setCreateRoomName] = useState('some room');
    const createRoom = () => {
        socket.emit('createRoom', createRoomName);
    };
    return (
        <div>
            <h1>Creating a game</h1>
            <section>
                <h2>Give the game a name!</h2>
                <input
                    type="text"
                    name="createRoom"
                    onChange={e => setCreateRoomName(e.target.value)}
                    value={createRoomName}
                />
                <button onClick={createRoom}>create room</button>
            </section>
        </div>
    );
};
export default CreateGame;
