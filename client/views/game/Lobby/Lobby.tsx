import { ViewName } from 'pedago-models'

const Lobby = ({ handleClick }: { handleClick: (vn: ViewName) => void }) => {
    return (
        <>
            Lobby
            <button onClick={() => handleClick(ViewName.Wizard)}>Back to Wizard</button>
        </>
    )
}

export default Lobby;