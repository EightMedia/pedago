import { getCookie, removeCookies, setCookies } from "cookies-next";
import { Language } from "models";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { DEFAULT_LANGUAGE } from "../contexts/LanguageContext";
import LandingPage from "../lib/views/landing/LandingPage";
import LanguageProvider from "../providers/Language.provider";

const ContentPage = ({ localLang }: { localLang: Language }) => {
  const [language, setLanguage] = useState<Language>(
    localLang || DEFAULT_LANGUAGE
  );

  useEffect(() => {
    setCookies("language", language);
    return () => removeCookies("room");
  }, [language]);

  return (
    <>
      <Head>
        <title>Pedago Game</title>
      </Head>
      <LanguageProvider lang={language}>
        <LandingPage
          language={language}
          setLanguage={setLanguage}
        ></LandingPage>
      </LanguageProvider>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({req, res}) => {  
  const localLang = getCookie("language", { req, res});  
  return { props: { localLang: localLang || Language.NL } };
};

export default ContentPage;
