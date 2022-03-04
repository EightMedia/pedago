import { ViewName } from 'models'

const AdminResult = ({ handleClick }: { handleClick: (vn: ViewName) => void }) => {
    return (
        <>
            Result
            <button onClick={() => handleClick(ViewName.Wizard)}>Back to Wizard</button>
        </>
    )
}

export default AdminResult;