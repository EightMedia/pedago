import { useContext, useState } from "react";
import { LanguageContext } from "../../../contexts/LanguageContext";
import { getDataForAllGroups } from "../../../factories/Result.factory";
import { Center } from "../../layouts/Center";
import { Stack } from "../../layouts/Stack";
import { Baro } from "../Baro";
import { Button } from "../Button";
import { Diagram } from "../Diagram";
import { InputText } from "../InputText";
import { Panel, PanelTitle } from "../Panel";
import { Shape } from "../Shape";
import { Title } from "../Title";
import styles from "./Result.module.css";
import { ResultSet, ResultType } from "./Result.types";

export type ResultOverviewProps = {
  time?: number;
  callback?: () => void;
  data: ResultType["data"];
  showEmailPanel: boolean;
};

export const ResultOverview = ({
  data,
  showEmailPanel = true,
}: ResultOverviewProps) => {
  const groupsTotal = getDataForAllGroups(data.groups);
  const initialPrimaryData = data?.me ? data.me : groupsTotal;
  const text = useContext(LanguageContext);
  const resultsText = text.results;
  const [primaryData, setPrimaryData] = useState<ResultSet>(initialPrimaryData);
  const [secondaryData, setSecondaryData] = useState<ResultSet>(groupsTotal);
  const [detailsTitle, setDetailsTitle] = useState<string>(
    resultsText.myResult
  );
  const [activeButton, setActiveButton] = useState<string>(
    data?.me ? "me" : "total"
  );
  const [email, setEmail] = useState<string>("");

  const handleEmail = () => {
    const groupsParams = data.groups
      .map((e) => {
        return `${encodeURIComponent(e.name)}_${encodeURIComponent(
          e.data.toString()
        )}`;
      })
      .join("&");
    const meParams = data.me
      ? encodeURIComponent(data.me?.toString())
      : undefined;

    const url = `/result?me=${meParams}&groups=${groupsParams}`;
  };

  const handleClick = () => {
    if (email) {
      handleEmail();
    } else {
      console.error("No email provided");
    }
  };

  return (
    <>
      <Title>{resultsText.results}</Title>
      {(data.groups?.length > 1 || data.me) && (
        <div className={styles.buttonsWrapper}>
          <div className={styles.buttons}>
            {data.me && (
              <Button
                variation={
                  activeButton === "me" ? "whiteActive" : "whiteInactive"
                }
                onClick={() => {
                  setActiveButton("me");
                  setPrimaryData(data.me || groupsTotal);
                  setDetailsTitle(resultsText.myResult);
                  setSecondaryData(groupsTotal);
                }}
              >
                {resultsText.myResult}
              </Button>
            )}
            <Button
              variation={
                activeButton === "total" ? "whiteActive" : "whiteInactive"
              }
              onClick={() => {
                setActiveButton("total");
                setPrimaryData(groupsTotal);
                setDetailsTitle(resultsText.everyone);
                setSecondaryData(data.me || groupsTotal);
              }}
            >
              {resultsText.everyone}
            </Button>
            {data.groups.length > 1 &&
              data.groups.map((group) => (
                <Button
                  key={group.name}
                  variation={
                    activeButton === group.name
                      ? "whiteActive"
                      : "whiteInactive"
                  }
                  onClick={() => {
                    setActiveButton(group.name);
                    setPrimaryData(group.data);
                    setDetailsTitle(group.name);
                    setSecondaryData(groupsTotal);
                  }}
                >
                  {group.name}
                </Button>
              ))}
          </div>
        </div>
      )}
      <Diagram
        primary={primaryData}
        secondary={secondaryData}
        primaryLabel={resultsText.myResult}
        secondaryLabel={resultsText.everyone}
      />
      <div className={styles.panels}>
        <Panel>
          <PanelTitle>{detailsTitle}</PanelTitle>
          <Stack>
            {primaryData?.map((item, index) => (
              <div
                key={index}
                style={{ order: 0 - item }}
                className={styles.category}
              >
                <Baro value={item} max={36} color={index} />
                <Shape className={styles.categoryIcon} category={index} />
                <h3 className={styles.categoryTitle}>
                  {Object.values(text.categories)[index].title}
                </h3>
                <p className={styles.categoryText}>
                  {Object.values(text.categories)[index].description}
                </p>
              </div>
            ))}
          </Stack>
        </Panel>
        {showEmailPanel && (
          <Panel>
            <Center>
              <PanelTitle>{resultsText.save}?</PanelTitle>
              <Stack>
                <p>{resultsText.sendToMail}</p>
                <InputText
                  id={"email"}
                  label={"E-mail"}
                  placeholder={resultsText.yourMail}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button stretch={true} onClick={handleClick}>
                  {resultsText.send}
                </Button>
                <p>{resultsText.privacy}</p>
              </Stack>
            </Center>
          </Panel>
        )}
      </div>
    </>
  );
};
