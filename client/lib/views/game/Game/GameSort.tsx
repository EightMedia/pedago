export const GameSort = ({
  handleDoneSorting,
}: {
  handleDoneSorting: (order: number[]) => void;
}) => {
  return (
    <>
      <h2>sorting cards</h2>
      <button onClick={() => handleDoneSorting([4, 2, 3, 1, 0, 5])}>
        Ik ben klaar
      </button>
      {/* <SortList/> */}
    </>
  );
};
