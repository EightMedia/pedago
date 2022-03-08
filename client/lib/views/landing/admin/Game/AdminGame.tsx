import { ViewName } from "models";
import { Socket } from "socket.io-client";

const AdminGame = ({
  handleClick,
  socket,
  data,
}: {
  handleClick: (vn: ViewName) => void;
  socket: Socket | null;
  data: any;
}) => {
  return (
    <>
      <div className="container">
        <div className="header">
          <div className="participant-count">{data?.participants?.length}</div>
          <div className="logo">pedago</div>
          <div className="button-group">
            <button>Instellingen</button>
            <button>Uitleg</button>
          </div>
        </div>
      </div>
      <button onClick={() => handleClick(ViewName.Wizard)}>
        Back to Wizard
      </button>
    </>
  );
};

export default AdminGame;
