import { useContext } from "react";
import { LanguageContext } from "../../../contexts/LanguageContext";
import { Center } from "../../layouts/Center";
import { timedCallback } from "../../utils/timedCallback.util";
import { Loader } from "../Loader";
import { Panel, PanelTitle } from "../Panel";

export type ResultLoaderProps = {
  time?: number;
  callback?: () => void;
};

export const ResultLoader = ({ time = 3, callback }: ResultLoaderProps) => {
  timedCallback(1, callback);
  const text = useContext(LanguageContext).results.loader;

  return (
    <>
      <Panel width="sm">
        <Center>
          <Loader />
          <PanelTitle space="sm">{text.done}</PanelTitle>
          <p>{text.fetchResult}</p>
        </Center>
      </Panel>
    </>
  );
};
