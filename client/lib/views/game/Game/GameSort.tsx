import { Category } from "models";

export const GameSort = ({
  handleDoneSorting,
}: {
  handleDoneSorting: (order: Category[]) => void;
}) => {
  return (
    <>
      <h2>sorting cards</h2>
      <button
        onClick={() =>
          handleDoneSorting([
            Category.Caring,
            Category.Contextual,
            Category.Critical,
            Category.Functional,
            Category.Personal,
            Category.Psychological,
          ])
        }
      >
        Ik ben klaar
      </button>
      {/* <SortList/> */}
    </>
  );
};
