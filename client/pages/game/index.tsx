import { getCookie } from "cookies-next";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

const ReDirect = ({ roomCode }: { roomCode: string }) => {
  const router = useRouter();
  useEffect(() => {
    roomCode ? router.push(`/game/${roomCode}`) : router.back();
  }, [router, roomCode]);
  return null;
};

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const roomCode = getCookie("roomCode", { req, res });
  return { props: { roomCode: roomCode || null } };
};

export default ReDirect;
