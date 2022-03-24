import { Loader } from "../../../components/Loader";
import { Panel, PanelTitle } from "../../../components/Panel";
import { timedCallback } from "../../../utils/timedCallback.util";

export type ResultLoaderProps = {
  time?: number;
  callback?: () => void;
};

export const ResultLoader = ({ time = 3, callback }: ResultLoaderProps) => {
  timedCallback(1, callback);
  return (
    <>
      <Panel>
        <Loader />
        <PanelTitle>Helemaal klaar!</PanelTitle>
        <p>We halen jouw resultaten op.</p>
      </Panel>
    </>
  );
};
