const Wizard = ({ socket, data }: { socket: any; data: any }) => {
  // back to start
  const resetEveryone = () => {
    socket.emit("reset");
  };

  // end the party
  const killRoom = () => {
    socket.emit("killRoom", data.room);
  };

  return (
    <div>
      <h1>Admin dashboard for room {data?.room || "black hole"}!</h1>
      <section>
        <h2>Hello superboss! 🤠</h2>
        <button onClick={resetEveryone}>🎬 Reset everyone</button>
        <button onClick={killRoom}>☠️ Kill room</button>
      </section>
    </div>
  );
};
export default Wizard;
