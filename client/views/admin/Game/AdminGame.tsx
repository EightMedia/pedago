import { ViewName } from 'models';

const AdminGame = ({
    handleClick,
}: {
    handleClick: (vn: ViewName) => void;
}) => {
    return (
        <>
            Game
            <button onClick={() => handleClick(ViewName.Wizard)}>
                Back to Wizard
            </button>
        </>
    );
};

export default AdminGame;
