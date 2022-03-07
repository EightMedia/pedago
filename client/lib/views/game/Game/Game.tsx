import { ViewName } from 'models';

<<<<<<< HEAD:client/views/game/Game/Game.tsx
const Game = ({ handleClick }: { handleClick: (vn: ViewName) => void }) => {
    return (
        <>
            Game
            <button onClick={() => handleClick(ViewName.Wizard)}>
                Back to Wizard
            </button>
        </>
    );
=======
export const Game = ({
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
>>>>>>> main:client/lib/views/game/Game/Game.tsx
};
