import { ViewName } from "../../../../models/view-state.interface";

const Wizard = ({handleClick}:{handleClick: (vn: ViewName) => void}) => {
    return (
        <>
            <button onClick={ () => handleClick(ViewName.Lobby)}>Lobby</button>
            <button onClick={ () => handleClick(ViewName.Game)}>Game</button>
            <button onClick={ () => handleClick(ViewName.Result)}>Result</button>
        </>
    )
}

export default Wizard;