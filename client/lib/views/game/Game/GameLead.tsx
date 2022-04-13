import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../../../../contexts/LanguageContext";
import { Page } from "../../../components/Page";
import { Title } from "../../../components/Title";

export const GameLead = ({
  time = 3,
  callback,
  round,
}: {
  time?: number;
  callback?: () => void;
  round: number;
}) => {
  const [counter, setCounter] = useState(time);
  const text = useContext(LanguageContext).rounds[round - 1];

  useEffect(() => {
    if (!callback) return;
    const interval = setInterval(() => {
      setCounter(counter - 1);
      if (counter === 0) {
        clearInterval(interval);
        callback && callback();
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [counter, setCounter, callback]);
  return (
    <Page valign="center" background={6}>
      <Title>{text.lead}</Title>
    </Page>
  );
};
