import { ViewName } from 'pedago-models/models'

const Result = ({handleClick}:{handleClick: (vn: ViewName) => void}) => {
    return (
        <>
        Result
        <button onClick={ () => handleClick(ViewName.Wizard)}>Back to Wizard</button>
        </>
    )
}

export default Result;