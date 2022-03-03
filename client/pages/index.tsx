import React from "react";
import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import { DEFAULT_LANGUAGE, LanguageContext } from "../contexts/LanguageContext";
import { Language } from "../models/language.enum";
import LandingPage from "../views/LandingPage";
import { DataTranslation as DataTranslation } from "../models/data-translation.interface";
import * as languages from '../data/languages';

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

  const [language, setLanguage] = useState<Language>(() => {
    let langFromLocalStorage;
    if (typeof window !== "undefined") {
      langFromLocalStorage = window.localStorage.getItem("language");
    }

    return langFromLocalStorage ? langFromLocalStorage as Language : DEFAULT_LANGUAGE;
  });
  const data: DataTranslation = languages[language];
  useEffect(() => {
    window.localStorage.setItem("language", language);
  }, [language]);

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
      <LanguageContext.Provider value={data}>
        <LandingPage language={language} setLanguage={setLanguage}></LandingPage>
      </LanguageContext.Provider>
    </>
  );
};
export default ContentPage;
