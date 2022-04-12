import { useContext } from "react";
import { LanguageContext } from "../../../../contexts/LanguageContext";
import { Button } from "../../../components/Button";
import { IconsEnum } from "../../../components/Icon/Icon";
import { InfoItem } from "../../../components/InfoItem";
import { PanelTitle } from "../../../components/Panel";
import { Stack } from "../../../layouts/Stack";

// const WizardInfoItem = ({
//   title,
//   text,
//   icon,
// }: {
//   title: string;
//   text: string;
//   icon: string;
// }) => {
//   return (
//     <div className={styles.infoItem}>
//       <TextTitle>{title}</TextTitle>
//       <Text tone="light">{text}</Text>
//     </div>
//   );
// };

export const WizardInfo = ({ onClick }: { onClick: () => void }) => {
  const text = useContext(LanguageContext).gameWizard.info;

  return (
    <>
      <PanelTitle>{text.title}</PanelTitle>
      <Stack gap="xs">
        <InfoItem
          icon={IconsEnum.Info}
          title={text.items[0].caption}
          text={text.items[0].text}
        />
        <InfoItem
          icon={IconsEnum.Info}
          title={text.items[1].caption}
          text={text.items[1].text}
        />
        <InfoItem
          icon={IconsEnum.Info}
          title={text.items[2].caption}
          text={text.items[2].text}
        />
        <InfoItem
          icon={IconsEnum.Info}
          title={text.items[3].caption}
          text={text.items[3].text}
        />
        <InfoItem
          icon={IconsEnum.Info}
          title={text.items[4].caption}
          text={text.items[4].text}
        />
        <Button stretch onClick={onClick}>
          {text.understood}
        </Button>
      </Stack>
    </>
  );
};
