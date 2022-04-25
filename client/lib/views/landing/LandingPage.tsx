import { Language } from "models";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  ChangeEvent,
  Dispatch,
  FormEvent, SetStateAction,
  useContext,
  useState
} from "react";
import { LanguageContext } from "../../../contexts/LanguageContext";
import { Button } from "../../components/Button";
import { InputText } from "../../components/InputText";
import { Logo } from "../../components/Logo";
import { Page } from "../../components/Page";
import { Title } from "../../components/Title";
import { Center } from "../../layouts/Center";
import { LandingIllustration } from "./Landing.illustration";
import styles from "./LandingPage.module.css";

const LandingPage = ({
  language,
  setLanguage,
}: {
  language: Language;
  setLanguage: Dispatch<SetStateAction<Language>>;
}) => {
  const [roomCode, setRoomCode] = useState<string>("");
  const languageValues = Object.values(Language);
  const { text } = useContext(LanguageContext);
  const router = useRouter();

  const handleLanguageChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value as Language);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setRoomCode(event.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem("roomCode", roomCode);
    router.push(`/game/${roomCode}`);
  };

  return (
    <Page>
      <Center>
        <div className={styles.header}>
          <div className={styles.logoWrapper}>
            <Logo className={styles.logo} />
          </div>
          <div className={styles.languageSelect}>
            <select value={language} onChange={handleLanguageChange}>
              {languageValues.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className={styles.body}>
          <Title size="lg" element="h1">
            {text?.landing?.title}
          </Title>
          <div className={styles.description}>{text?.landing?.description}</div>
          <div className={styles.action}>
            <form onSubmit={handleSubmit}>
              <div className={styles.inputGroup}>
                <InputText
                  type="number"
                  onChange={handleInputChange}
                  placeholder={text?.landing?.input}
                  id={"roomCode"}
                  label={"spelcode"}
                />
                <Button type="submit">{text?.landing?.button}</Button>
              </div>
            </form>
            <div className={styles.adminText}>
              <Link href="/admin">{text?.landing?.create}</Link>{" "}
              {text?.landing?.asAdmin}
            </div>
          </div>
          <LandingIllustration className={styles.illustration} />
        </div>
      </Center>
    </Page>
  );
};
export default LandingPage;
