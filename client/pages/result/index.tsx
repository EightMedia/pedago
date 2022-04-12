import { useRouter } from "next/router";
import { Page } from "../../lib/components/Page";
import {
    ResultGroup,
    ResultSet
} from "../../lib/components/Result/Result.types";
import { ResultOverview } from "../../lib/components/Result/ResultOverview.scene";

const stringToResultSet = (nmbrs: string): ResultSet | undefined => {
  if (nmbrs === "undefined") {
    return undefined;
  }
  const decoded = decodeURIComponent(nmbrs);
  return Object.assign([], decoded)
    ?.filter((i: string) => i !== ",")
    ?.map((i: string) => parseInt(i, 10)) as ResultSet;
};

const stringToGroups = (grps: string): ResultGroup[] | [] => {
  const groupsArray = grps.split("&");
  return groupsArray.map((g: string, i: number) => {
    const gArr = g.split("_");
    return {
      id: i.toString(),
      name: decodeURIComponent(gArr[0]),
      data: stringToResultSet(gArr[1]) as ResultSet,
    };
  });
};

const ResultPage = () => {
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
    </>
  );
};

export default ResultPage;
