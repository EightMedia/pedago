import { ChangeEvent, Dispatch, SetStateAction, useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { Language } from "../models/language.enum";
import * as languages from '../data/languages';
import styles from '../styles/LandingPage.module.css';
import { Content } from "../models/content.interface";

const LandingPage = ({ language, setLanguage }: { language: Language, setLanguage: Dispatch<SetStateAction<Language>> }) => {
  const languageValues = Object.values(Language);

  const handleLanguageChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value as Language);
  }

  const languageValue = useContext(LanguageContext);
  const content: Content = languages[language];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div></div>
        <div className={styles.logo}>Logo</div>
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
          {content?.landing?.title}
        </div>
        <div className="description">
          {content?.landing?.description}
        </div>
      </div>
    </div>
  )
}
export default LandingPage; 