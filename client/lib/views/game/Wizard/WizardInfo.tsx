import { useContext } from "react";
import { LanguageContext } from "../../../../contexts/LanguageContext";
import { Button } from "../../../components/Button";
import { PanelTitle } from "../../../components/Panel";
import { Stack } from "../../../layouts/Stack";
import styles from "./Wizard.module.css";

const WizardInfoItem = ({
  title,
  text,
  icon,
}: {
  title: string;
  text: string;
  icon: string;
}) => {
  return (
    <div className={styles.infoItem}>
      <h3 className={styles.itemTitle}>{title}</h3>
      <p className={styles.itemText}>{text}</p>
    </div>
  );
};

export const WizardInfo = ({ onClick }: { onClick: () => void }) => {
  const text = useContext(LanguageContext).gameWizard.info;

  return (
    <>
      <PanelTitle>{text.title}</PanelTitle>
      <Stack gap="xs">
        <WizardInfoItem
          icon="some-icon"
          title={text.items[0].caption}
          text={text.items[0].text}
        />
        <WizardInfoItem
          icon="some-icon"
          title={text.items[1].caption}
          text={text.items[1].text}
        />
        <WizardInfoItem
          icon="some-icon"
          title={text.items[2].caption}
          text={text.items[2].text}
        />
        <WizardInfoItem
          icon="some-icon"
          title={text.items[3].caption}
          text={text.items[3].text}
        />
        <WizardInfoItem
          icon="some-icon"
          title={text.items[4].caption}
          text={text.items[4].text}
        />
        <Button onClick={onClick}>{text.understood}</Button>
      </Stack>
    </>
  );
};
