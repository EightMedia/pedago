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
        <div className="debugging">
          <section>
            <h2>Send message somewhere</h2>
            <input
              type="text"
              name="msg"
              onChange={(e) => setMsg(e.target.value)}
              value={msg}
            />
            <button
              onClick={() => {
                sendMsg("me");
              }}
            >
              Send to me
            </button>
            <button
              onClick={() => {
                sendMsg("room");
              }}
            >
              Send to room
            </button>
            <button
              onClick={() => {
                sendMsg("all");
              }}
            >
              Send to all games
            </button>
          </section>
          <h3>Message</h3>
          <pre>{JSON.stringify(some)}</pre>
          <h3>Game data</h3>
          <pre>{JSON.stringify(gameData, null, 2)}</pre>
          <h3>View</h3>
          <pre>{JSON.stringify(view, null, 2)}</pre>
          <button onClick={() => setView({ view: "Start", data: {} })}>
            RESET
          </button>
        </div>
      </LanguageContext.Provider>
    </>
  );
};
export default ContentPage;
