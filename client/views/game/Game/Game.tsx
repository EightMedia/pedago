import { ViewName } from 'pedago-models/models'

const Game = ({ handleClick }: { handleClick: (vn: ViewName) => void }) => {
    return (
        <>
            Game
            <button onClick={() => handleClick(ViewName.Wizard)}>Back to Wizard</button>
        </>
    )
}

export default Game;