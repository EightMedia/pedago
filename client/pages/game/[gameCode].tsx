import { useRouter } from "next/router";

const ThePage = () => {
  const router = useRouter();
  const gameCode = router.query.gameCode;
  return (
    <div>
      <h1>Joining game {gameCode}</h1>
    </div>
  );
};
export default ThePage;
