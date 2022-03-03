import Link from "next/link";
import { ChangeEvent, Dispatch, SetStateAction, useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { Language } from "../models/language.enum";
import styles from '../styles/LandingPage.module.css';

const LandingPage = ({ language, setLanguage }: { language: Language, setLanguage: Dispatch<SetStateAction<Language>> }) => {
  const languageValues = Object.values(Language);
  const data = useContext(LanguageContext);

  const handleLanguageChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value as Language);
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
        <form>
          <input name="gameCode" placeholder={data?.landing?.input} />
          <Link href="/player" passHref><button>{data?.landing?.button}</button></Link>
        </form>
        <Link href="/admin">{data?.landing?.create}</Link> {data?.landing?.asAdmin}
        </div>
      </div>
    </div>
  )
}
export default LandingPage;
