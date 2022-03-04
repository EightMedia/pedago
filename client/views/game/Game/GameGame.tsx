import { ViewName } from 'models';

const GameGame = ({ handleClick }: { handleClick: (vn: ViewName) => void }) => {
    return (
        <>
            Game
            <button onClick={() => handleClick(ViewName.Wizard)}>Back to Wizard</button>
        </>
    )
}

export default GameGame;