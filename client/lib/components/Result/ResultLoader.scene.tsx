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
  return (
    <>
      <Panel width="sm">
        <Center>
          <Loader />
          <PanelTitle space="sm">Helemaal klaar!</PanelTitle>
          <p>We halen jouw resultaten op.</p>
        </Center>
      </Panel>
    </>
  );
};
