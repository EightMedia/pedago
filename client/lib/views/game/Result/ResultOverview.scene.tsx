import { useContext, useState } from "react";
import { LanguageContext } from "../../../../contexts/LanguageContext";
import { Button } from "../../../components/Button";
import { Diagram } from "../../../components/Diagram";
import { Panel, PanelTitle } from "../../../components/Panel";
import { Shape } from "../../../components/Shape";
import { Title } from "../../../components/Title";
import { Stack } from "../../../layouts/Stack";
import { timedCallback } from "../../../utils/timedCallback.util";
import styles from "./Result.module.css";
import { ResultType } from "./Result.types";

export type ResultOverviewProps = {
  time?: number;
  callback?: () => void;
  data: ResultType["data"];
};

export const ResultOverview = ({
  time = 3,
  callback,
  data,
}: ResultOverviewProps) => {
  timedCallback(time, callback);
  const lang = useContext(LanguageContext);
  const t = lang.results;
  const [primaryData, setPrimaryData] = useState(data.me);
  const [secondaryData, setSecondaryData] = useState(data.total);
  const [detailsTitle, setDetailsTitle] = useState(t.myResult);
  return (
    <>
      <Title>{t.results}</Title>
      <div className={styles.buttons}>
        <Button
          variation="whiteActive"
          onClick={() => {
            setPrimaryData(data.me);
            setDetailsTitle(t.myResult);
            setSecondaryData(data.total);
          }}
        >
          {t.myResult}
        </Button>
        <Button
          variation="whiteInactive"
          onClick={() => {
            setPrimaryData(data.total);
            setDetailsTitle(t.everyone);
            setSecondaryData(data.me);
          }}
        >
          {t.everyone}
        </Button>
      </div>
      <Diagram
        primary={primaryData}
        secondary={secondaryData}
        primaryLabel={t.myResult}
        secondaryLabel={t.everyone}
      />
      <Panel>
        <PanelTitle>{detailsTitle}</PanelTitle>
        <Stack>
          {primaryData.map((item, index) => (
            <div
              key={index}
              style={{ order: 0 - item }}
              className={styles.category}
            >
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
    </>
  );
};
