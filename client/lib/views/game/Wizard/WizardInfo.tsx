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
  return (
    <>
      <PanelTitle>Speluitleg</PanelTitle>
      <Stack gap="xs">
        <WizardInfoItem
          icon="some-icon"
          title="Lorem ipsum"
          text="Lorem ipsum dolor sit amet cons lectetur adipisicing elit. Commodi recusandae dolor."
        />
        <WizardInfoItem
          icon="some-icon"
          title="Lorem ipsum"
          text="Lorem ipsum dolor sit amet cons lectetur adipisicing elit. Commodi recusandae dolor."
        />
        <WizardInfoItem
          icon="some-icon"
          title="Lorem ipsum"
          text="Lorem ipsum dolor sit amet cons lectetur adipisicing elit. Commodi recusandae dolor."
        />
        <WizardInfoItem
          icon="some-icon"
          title="Lorem ipsum"
          text="Lorem ipsum dolor sit amet cons lectetur adipisicing elit. Commodi recusandae dolor."
        />
        <WizardInfoItem
          icon="some-icon"
          title="Lorem ipsum"
          text="Lorem ipsum dolor sit amet cons lectetur adipisicing elit. Commodi recusandae dolor."
        />
        <WizardInfoItem
          icon="some-icon"
          title="Lorem ipsum"
          text="Lorem ipsum dolor sit amet cons lectetur adipisicing elit. Commodi recusandae dolor."
        />
        <Button onClick={onClick}>Ik snap het</Button>
      </Stack>
    </>
  );
};
