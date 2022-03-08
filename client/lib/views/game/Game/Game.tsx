import { ViewName } from "models";

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
};
