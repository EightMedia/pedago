import { Button } from "@components/Button";
import { Icon } from "@components/Icon";
import { IconsEnum } from "@components/Icon/Icon";
import { InputText } from "@components/InputText";
import { Logo } from "@components/Logo";
import { Page } from "@components/Page";
import { PageSlot } from "@components/Page/Page";
import PrivacyStatement from "@components/PrivacyStatement";
import { Title } from "@components/Title";
import { Center } from "@layouts/Center";
import { removeCookies, setCookies } from "cookies-next";
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
import { LanguageContext } from "../../contexts/LanguageContext";
import styles from "./LandingPage.module.css";

const LandingPage = ({
  language,
  setLanguage,
}: {
  language: Language;
  setLanguage: Dispatch<SetStateAction<Language>>;
}) => {
  const [showPrivacyStatement, setShowPrivacyStatement] =
    useState<boolean>(false);
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
              {language === "NL" && <Icon icon={IconsEnum.Check} size="xs" />}
            </button>
            <button
              onClick={() => handleChangeLanguage(Language.EN)}
              className={styles.lang}
            >
              English
              {language === "EN" && <Icon icon={IconsEnum.Check} size="xs" />}
            </button>
          </div>
        )}
      </PageSlot>
      {(() => {
        switch (showPrivacyStatement === true) {
          case true:
            return (
              <>
                <PrivacyStatement
                  handleClose={() => setShowPrivacyStatement(false)}
                ></PrivacyStatement>
              </>
            );
          case false:
            return (
              <>
                <PageSlot location="subheader" className={styles.subHeader}>
                  <Title size="lg" element="h1">
                    {text?.landing?.title}
                  </Title>
                  <div className={styles.description}>
                    {text?.landing?.description}
                  </div>
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
                          <a tabIndex={1} onClick={() => removeCookies("room")}>
                            <span className={styles.createGame}>
                              {text?.landing?.create}
                            </span>
                          </a>
                        </Link>

                        <span> {text?.landing?.asAdmin}</span>
                      </div>
                    </Center>
                  </div>
                  <img
                    src="images/visual.png"
                    alt="illustratie van het pedago spel"
                    className={styles.visual}
                  />
                  <Title size="sm-md">{language === "NL" ? "Mogelijk gemaakt door" : "Made possible by"}</Title>
                  <div className={styles.logos}>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </PageSlot>
              </>
            );
        }
      })()}
      <PageSlot location="footer" className={styles.footer}>
        <a onClick={() => setShowPrivacyStatement(!showPrivacyStatement)}>
          Privacy
        </a>
        <a onClick={() => setShowPrivacyStatement(!showPrivacyStatement)}>
          Cookies
        </a>
      </PageSlot>
    </Page>
  );
};
export default LandingPage;
