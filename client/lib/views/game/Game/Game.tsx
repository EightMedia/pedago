import { ViewName } from "models";
import { useState } from "react";

export const Game = ({
  handleClick,
}: {
  handleClick: (vn: ViewName, name: string) => void;
}) => {
  const [name, setName] = useState<string>('');
  return (
    <>
      Game
      <input type="text" onChange={e => setName(e.target.value)}/>
      <button onClick={() => handleClick(ViewName.Wizard, name)}>
        Back to Wizard
      </button>
    </>
  );
};
