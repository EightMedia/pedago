import { setCookies } from "cookies-next";
import { Language } from "models";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useContext,
  useState
} from "react";
import { LanguageContext } from "../../../contexts/LanguageContext";
import { Button } from "../../components/Button";
import { Icon } from "../../components/Icon";
import { IconsEnum } from "../../components/Icon/Icon";
import { InputText } from "../../components/InputText";
import { Logo } from "../../components/Logo";
import { Page } from "../../components/Page";
import { PageSlot } from "../../components/Page/Page";
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
  const { text } = useContext(LanguageContext);
  const router = useRouter();
  const [languageSelect, setLanguageSelect] = useState<boolean>(false);

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setRoomCode(event.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (roomCode) setCookies("roomCode", roomCode.toString());
    router.push(`/game/${roomCode}`);
  };

  const handleChangeLanguage = (lang: Language) => {
    handleLanguageChange(lang);
    setLanguageSelect(false);
  };

  return (
    <Page valign="center">
      <PageSlot location="headerCenter">
        <Logo />
      </PageSlot>
      <PageSlot location="headerRight" className={styles.languageSelect}>
        <button
          className={styles.languageToggle}
          onClick={() => setLanguageSelect(!languageSelect)}
        >
          <Icon icon={IconsEnum.Language} />
          <span>{language.toString()}</span>
        </button>
        {languageSelect && (
          <div className={styles.languages}>
            <button
              onClick={() => handleChangeLanguage(Language.NL)}
              className={styles.lang}
            >
              Nederlands
            </button>
            <button
              onClick={() => handleChangeLanguage(Language.EN)}
              className={styles.lang}
            >
              English
            </button>
          </div>
        )}
      </PageSlot>
      <PageSlot location="subheader" className={styles.subHeader}>
        <Title size="lg" element="h1">
          {text?.landing?.title}
        </Title>
        <div className={styles.description}>{text?.landing?.description}</div>
      </PageSlot>
      <PageSlot location="body">
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
          <Center>
            <div className={styles.adminText}>
              <Link href="/admin" passHref>
                <span className={styles.createGame}>
                  {text?.landing?.create}
                </span>
              </Link>{" "}
              <span>{text?.landing?.asAdmin}</span>
            </div>
          </Center>
        </div>
        <LandingIllustration className={styles.illustration} />
      </PageSlot>
      <PageSlot location="footer" className={styles.footer}>
        <a>Privacy</a>
        <a>Cookies</a>
      </PageSlot>
    </Page>
  );
};
export default LandingPage;
