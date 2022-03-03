import Link from "next/link";

const ThePage = () => {
  return (
    <div>
      <h1>Join a game</h1>
      <Link href="/game/123">Join game 123456</Link>
    </div>
  );
};
export default ThePage;
