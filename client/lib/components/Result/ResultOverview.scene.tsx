import { Event, SocketCallback } from "models";
import { useContext, useState } from "react";
import { LanguageContext } from "../../../contexts/LanguageContext";
import { SocketContext } from "../../../contexts/SocketContext";
import { getDataForAllGroups } from "../../../factories/Result.factory";
import { Center } from "../../layouts/Center";
import { Stack } from "../../layouts/Stack";
import { Baro } from "../Baro";
import { Button } from "../Button";
import { Diagram } from "../Diagram";
import { InputText } from "../InputText";
import { Panel, PanelTitle } from "../Panel";
import { Shape } from "../Shape";
import { Text } from "../Text";
import { TextTitle } from "../TextTitle";
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
  const socket = useContext(SocketContext);
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
    socket?.emit(Event.Email, email, url, (res: SocketCallback) => {
      console.log(res);
    });
  };

  const handleClick = () => {
    if (email) {
      handleEmail();
    } else {
      console.error("No email provided");
    }
  };

  return (
    <div>
      <Title>{resultsText.results}</Title>
      {(data.groups?.length > 1 || data.me) && (
        <div className={styles.buttonsWrapper}>
          <div className={styles.buttons} dir="ltr">
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
        className={styles.diagram}
      />
      <div className={styles.panels}>
        <Panel>
          <PanelTitle>{detailsTitle}</PanelTitle>
          <Stack gap="lg">
            {primaryData?.map((item, index) => (
              <div
                key={index}
                style={{ order: 0 - item }}
                className={styles.category}
              >
                <Baro
                  className={styles.categoryBaro}
                  value={item}
                  max={36}
                  color={index}
                />
                <Shape className={styles.categoryIcon} category={index} />
                <div className={styles.categoryMain}>
                  <TextTitle>
                    {Object.values(text.categories)[index].title}
                  </TextTitle>
                  <Text tone="light">
                    {Object.values(text.categories)[index].description}
                  </Text>
                </div>
              </div>
            ))}
          </Stack>
        </Panel>
        {showEmailPanel && (
          <Panel width="sm">
            <Center>
              <PanelTitle space="sm">{resultsText.save}?</PanelTitle>
              <Stack gap="md">
                <Text align="center" tone="light">
                  {resultsText.sendToMail}
                </Text>
                <InputText
                  id={"email"}
                  label={"E-mail"}
                  placeholder={resultsText.yourMail}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button stretch={true} onClick={handleClick}>
                  {resultsText.send}
                </Button>
                <Text align="center" size="xs" tone="light">
                  {resultsText.privacy}
                </Text>
              </Stack>
            </Center>
          </Panel>
        )}
      </div>
    </div>
  );
};
