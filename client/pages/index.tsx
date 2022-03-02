import React, { ChangeEvent, createContext } from "react";
import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import { defaultLanguage, LanguageContext } from "../contexts/LanguageContext";
import { Language } from "../models/language.enum";
import LandingPage from "../views/LandingPage";


function useSocket(url: string) {
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const socketIo = io(url);

    setSocket(socketIo);

    function cleanup() {
      socketIo.disconnect();
    }
    return cleanup;
  }, []);

  return socket;
}

// const SocketContext = React.createContext(null);

const ContentPage = () => {
  const socket: Socket | null = useSocket("http://localhost:3001");
  const [some, setSome] = useState("nothing yet");
  const [gameData, setGameData] = useState({});
  const [msg, setMsg] = useState("a message");
  const [view, setView] = useState({ view: "Start", data: {} });
  
  const [language, setLanguage] = useState<Language>(defaultLanguage);

  useEffect(() => {
    if (socket) {
      socket.on("message", setSome);
      socket.on("newData", setGameData);
      socket.on("to", setView);
    }
  }, [socket]);

  const sendMsg = (to: string) => {
    const room = localStorage.getItem("room") || "";
    (socket as Socket).emit("message", { msg: msg, to: to, room: room });
  };

  return (
    <>
      <LanguageContext.Provider value={language}>
        <LandingPage language={language} setLanguage={setLanguage}></LandingPage>
      </LanguageContext.Provider>
    </>
  );
};
export default ContentPage;
