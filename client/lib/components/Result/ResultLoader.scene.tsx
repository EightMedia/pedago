import { useContext } from "react";
import { LanguageContext } from "../../../contexts/LanguageContext";
import { Center } from "../../layouts/Center";
import { TimedCallback } from "../../utils/timedCallback.util";
import { Loader } from "../Loader";
import { Panel, PanelTitle } from "../Panel";
import { Text } from "../Text";

export type ResultLoaderProps = {
  time?: number;
  callback?: () => void;
};

export const ResultLoader = ({ time = 3, callback }: ResultLoaderProps) => {
  TimedCallback(1, callback);
  const text = useContext(LanguageContext).results.loader;

  return (
    <div style={{ alignSelf: "center" }}>
      <Panel width="sm">
        <Center>
          <Loader />
          <PanelTitle space="sm">{text.done}</PanelTitle>
          <Text size="md" tone="light">
            {text.fetchResult}
          </Text>
        </Center>
      </Panel>
    </div>
  );
};
