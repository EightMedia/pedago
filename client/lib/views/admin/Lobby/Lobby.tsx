import cx from "classnames";
import styles from "./Lobby.module.css";
import { LobbyType } from "./Lobby.types";
import { Page } from "../../../components/Page";
import { Panel } from "../../../components/Panel";
import { PanelTitle } from "../../../components/Panel";

export const LobbyComponent = ({}: LobbyType) => {
  const siteUrl = process.env.SITE_URL || "https://example.com";
  const readableSiteUrl = process.env.SITE_READABLE_URL || "example.com";
  return (
    <Page>
      <header className={styles.header}>
        <div className="roomCode">3402</div>
        <p>
          Voer de code in op <a href="{siteUrl}">{readableSiteUrl}</a> en doe
          mee
        </p>
      </header>
      <div className="groupsCollection">
        <div className="group">
          <p>users</p>
        </div>
        <div className="group">
          <p>users</p>
        </div>
      </div>
    </Page>
  );
};

export const Lobby = memo(LobbyComponent);
