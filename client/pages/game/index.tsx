import { useRouter } from "next/router";
import { useEffect } from "react";

const ReDirect = () => {
  const router = useRouter();
  useEffect(() => {
    let roomCode;
    if (typeof window !== "undefined") {
      roomCode = localStorage.getItem("roomCode");
    }
    roomCode ? router.push(`/game/${roomCode}`) : router.back();
  }, [router]);
  return null;
};

export default ReDirect;
