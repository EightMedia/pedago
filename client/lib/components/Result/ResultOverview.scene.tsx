import { useContext, useState } from "react";
import { LanguageContext } from "../../../contexts/LanguageContext";
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
import { ResultType } from "./Result.types";

export type ResultOverviewProps = {
  time?: number;
  callback?: () => void;
  data: ResultType["data"];
};

export const ResultOverview = ({ data }: ResultOverviewProps) => {
  let rnd = 1;
  const groupsTotal = data.groups.reduce(
    (acc, group) => {
      const sum = acc.map(function (num, i) {
        const avg = (num * (rnd - 1) + group.data[i]) / rnd;
        return avg;
      });
      rnd++;
      return sum;
    },
    [0, 0, 0, 0, 0, 0]
  );

  const initialPrimaryData = data?.me ? data.me : groupsTotal;
  const lang = useContext(LanguageContext);
  const t = lang.results;
  const [primaryData, setPrimaryData] = useState(initialPrimaryData);
  const [secondaryData, setSecondaryData] = useState(groupsTotal);
  const [detailsTitle, setDetailsTitle] = useState(t.myResult);
  const [activeButton, setActiveButton] = useState<string>(
    data?.me ? "me" : "total"
  );

  return (
    <>
      <Title>{t.results}</Title>
      {(data.groups.length > 1 || data.me) && (
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
                  setDetailsTitle(t.myResult);
                  setSecondaryData(groupsTotal);
                }}
              >
                {t.myResult}
              </Button>
            )}
            <Button
              variation={
                activeButton === "total" ? "whiteActive" : "whiteInactive"
              }
              onClick={() => {
                setActiveButton("total");
                setPrimaryData(groupsTotal);
                setDetailsTitle(t.everyone);
                setSecondaryData(data.me || groupsTotal);
              }}
            >
              {t.everyone}
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
        primaryLabel={t.myResult}
        secondaryLabel={t.everyone}
      />
      <div className={styles.panels}>
        <Panel>
          <PanelTitle>{detailsTitle}</PanelTitle>
          <Stack>
            {primaryData.map((item, index) => (
              <div
                key={index}
                style={{ order: 0 - item }}
                className={styles.category}
              >
                <Baro value={item} max={36} color={index} />
                <Shape className={styles.categoryIcon} category={index} />
                <h3 className={styles.categoryTitle}>
                  {Object.values(lang.categories)[index].title}
                </h3>
                <p className={styles.categoryText}>
                  {Object.values(lang.categories)[index].description}
                </p>
              </div>
            ))}
          </Stack>
        </Panel>
        <Panel>
          <Center>
            <PanelTitle>{t.save}?</PanelTitle>
            <Stack>
              <p>{t.sendToMail}</p>
              <InputText
                id={"email"}
                label={"E-mail"}
                placeholder={t.yourMail}
              />
              <Button stretch={true} onClick={() => alert("todo: send mail")}>
                {t.send}
              </Button>
              <p>{t.privacy}</p>
            </Stack>
          </Center>
        </Panel>
      </div>
    </>
  );
};
