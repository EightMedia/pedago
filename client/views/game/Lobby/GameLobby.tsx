import { ViewName } from 'models';

const GameLobby = ({
    handleClick,
}: {
    handleClick: (vn: ViewName) => void;
}) => {
    return (
        <>
            Lobby
            <button onClick={() => handleClick(ViewName.Wizard)}>
                Back to Wizard
            </button>
        </>
    );
};

export default GameLobby;
