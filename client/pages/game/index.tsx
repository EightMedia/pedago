import { useRouter } from "next/router";
import { useEffect } from "react";

const ReDirect = () => {
  const router = useRouter();
  useEffect(() => {
    let gameCode;
    if (typeof window !== "undefined") {
      gameCode = localStorage.getItem("gameCode");
    }
    gameCode ? router.push(`/game/${gameCode}`) : router.back();
  }, [router]);
  return null;
};

export default ReDirect;
