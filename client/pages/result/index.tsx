import { getCookie } from "cookies-next";
import { Language } from "models";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { Page } from "../../lib/components/Page";
import {
  ResultGroup,
  ResultSet
} from "../../lib/components/Result/Result.types";
import { ResultOverview } from "../../lib/components/Result/ResultOverview.scene";
import LanguageProvider from "../../providers/Language.provider";

const stringToResultSet = (nmbrs: string): ResultSet | undefined => {
  if (nmbrs === "undefined") {
    return undefined;
  }
  const decoded = decodeURIComponent(nmbrs);
  return decoded.split(",").map((item) => parseInt(item, 10)) as ResultSet;
};

const stringToGroups = (grps: string): ResultGroup[] | [] => {
  const groupsArray = grps.split("*");
  return groupsArray.map((g: string, i: number) => {
    const gArr = g.split("_");
    return {
      id: i.toString(),
      name: decodeURIComponent(gArr[0]),
      data: stringToResultSet(gArr[1]) as ResultSet,
    };
  });
};

const ResultPage = ({ localLang }: { localLang: Language }) => {
  const { me, groups } = useRouter().query;
  let meData = undefined;
  let groupsData: ResultGroup[] = [];
  if (groups) {
    groupsData = stringToGroups(groups as string);
  }
  if (me) {
    meData = stringToResultSet(me as string);
  }

  return (
    <>
      <Head>
        <title>Pedago Game</title>
      </Head>
      <LanguageProvider lang={localLang}>
        {groups && (
          <Page valign="center" background={4}>
            <ResultOverview
              data={{
                me: meData,
                groups: groupsData,
              }}
              showEmailPanel={false}
            />
          </Page>
        )}
      </LanguageProvider>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const localLang = getCookie("language", { req, res });
  return { props: { localLang: localLang || Language.NL } };
};

export default ResultPage;
