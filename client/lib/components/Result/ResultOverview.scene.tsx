import { Event, SocketCallback } from "models";
import { FormEvent, useContext, useState } from "react";
import { LanguageContext } from "../../../contexts/LanguageContext";
import { SocketContext } from "../../../contexts/SocketContext";
import { getDataForAllGroups } from "../../../factories/Result.factory";
import { Center } from "../../layouts/Center";
import { Stack } from "../../layouts/Stack";
import { Baro } from "../Baro";
import { Button } from "../Button";
import { Diagram } from "../Diagram";
import { Icon } from "../Icon";
import { IconsEnum } from "../Icon/Icon";
import { InputText } from "../InputText";
import { PageSlot } from "../Page/Page";
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

enum EmailSentEnum {
  NotSent,
  Sent,
  Error,
}

export const ResultOverview = ({
  data,
  showEmailPanel = true,
}: ResultOverviewProps) => {
  const groupsTotal = getDataForAllGroups(data.groups);
  const initialPrimaryData = data?.me ? data.me : groupsTotal;
  const { text, lang } = useContext(LanguageContext);
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
  const [emailError, setEmailError] = useState<string>("");
  const [sent, setSent] = useState<EmailSentEnum>(EmailSentEnum.NotSent);

  const handleEmail = () => {
    const groupsParams = data.groups
      .map((e) => {
        return `${encodeURIComponent(e.name)}_${encodeURIComponent(
          e.data.toString()
        )}`;
      })
      .join("*");
    const meParams = data.me
      ? encodeURIComponent(data.me?.toString())
      : undefined;

    const siteUrl =
      process.env.NEXT_PUBLIC_SITE_URL || "https://www.pedagogame.com";
    const url = `${siteUrl}/result?me=${meParams}&groups=${groupsParams}`;

    socket?.emit(Event.Email, email, url, (res: SocketCallback) => {
      setSent(EmailSentEnum.NotSent);
      setEmailError("");
      console.log(res);
      if (res.status === "OK") {
        setSent(EmailSentEnum.Sent);
      } else if (res.status === "ERROR") {
        setSent(EmailSentEnum.Error);
        res.message && setEmailError(res.message as string);
      }
    });
  };

  const handleClick = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmailError("");
    const errorObject = {
      NL: "Voer een geldig e-mailadres in",
      EN: "Please enter a valid email address",
    };
    const emailRegExp = new RegExp(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

    if (email && emailRegExp.test(email)) {
      handleEmail();
    } else {
      setEmailError(errorObject[lang]);
    }
  };

  return (
    <div>
      <PageSlot location="subheader" className={styles.header}>
        <Title size="lg" element="h1">
          {resultsText.results}
        </Title>
        <div className={styles.description}>{resultsText.subTitle}</div>
      </PageSlot>
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
                    setSecondaryData(data.me || groupsTotal);
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
      <div className={showEmailPanel ? styles.panels : styles.singlePanel}>
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
                <form onSubmit={handleClick}>
                  <Stack gap="2xs">
                    {sent === EmailSentEnum.Sent && (
                      <Icon
                        className={styles.emailSent}
                        icon={IconsEnum.Check}
                        color="green"
                      />
                    )}
                    {sent === EmailSentEnum.Error && (
                      <Icon
                        className={styles.emailError}
                        icon={IconsEnum.Close}
                        color="red"
                        size="sm"
                      />
                    )}
                    <InputText
                      id={"email"}
                      label={"E-mail"}
                      placeholder={resultsText.yourMail}
                      type="email"
                      error={emailError}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <Button stretch={true} type="submit">
                      {resultsText.send}
                    </Button>
                  </Stack>
                </form>
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
