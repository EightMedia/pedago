import { Button } from "../../../components/Button";
import { Page } from "../../../components/Page";
import { Panel, PanelTitle } from "../../../components/Panel";

export const LobbyInfo = ({ handleClick }: { handleClick: () => void }) => {
  return (
    <Page>
      <Panel>
        <PanelTitle>Voor we beginnen</PanelTitle>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam,
          ipsum. Rerum obcaecati possimus quam, tempore autem omnis, natus
          nostrum asperiores voluptas deleniti numquam, cum fugit soluta
          debitis. Corrupti, ut quaerat?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam,
          ipsum. Rerum obcaecati possimus quam, tempore autem omnis, natus
          nostrum asperiores voluptas deleniti numquam, cum fugit soluta
          debitis. Corrupti, ut quaerat?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam,
          ipsum. Rerum obcaecati possimus quam, tempore autem omnis, natus
          nostrum asperiores voluptas deleniti numquam, cum fugit soluta
          debitis. Corrupti, ut quaerat?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam,
          ipsum. Rerum obcaecati possimus quam, tempore autem omnis, natus
          nostrum asperiores voluptas deleniti numquam, cum fugit soluta
          debitis. Corrupti, ut quaerat?
        </p>
        <Button onClick={handleClick}>Ik snap het</Button>
      </Panel>
    </Page>
  );
};
