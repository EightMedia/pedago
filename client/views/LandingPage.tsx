import Link from "next/link";
import { Language } from "pedago-models/models";
import { ChangeEvent, Dispatch, FormEvent, SetStateAction, useContext, useState } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import styles from '../styles/LandingPage.module.css';

const LandingPage = ({ language, setLanguage }: { language: Language, setLanguage: Dispatch<SetStateAction<Language>> }) => {
  const [gameCode, setGameCode] = useState<string | undefined>(undefined);
  const languageValues = Object.values(Language);
  const data = useContext(LanguageContext);

  const handleLanguageChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value as Language);
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setGameCode(event.target.value);
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div></div>
        <div className={styles.logo}>PEDAGO</div>
        <div className="language-select">
          <select value={language} onChange={handleLanguageChange}>
            {languageValues.map((option, index) => (
              <option key={index} value={option}>{option}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="body">
        <div className="title">
          {data?.landing?.title}
        </div>
        <div className="description">
          {data?.landing?.description}
        </div>
        <div className="action">
          <form onSubmit={handleSubmit}>
            <input type="number" maxLength={5} minLength={5} value={gameCode} onChange={handleInputChange} placeholder={data?.landing?.input} />
            <Link href={`/game/${gameCode}`} passHref>
              <button type="submit">
                {data?.landing?.button}
              </button>
            </Link>
          </form>
          <Link href="/admin">{data?.landing?.create}</Link> {data?.landing?.asAdmin}
        </div>
      </div>
    </div>
  )
}
export default LandingPage;
