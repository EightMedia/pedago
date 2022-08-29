import { useContext } from "react";
import { LanguageContext } from "../../../contexts/LanguageContext";
import { Button } from "../../components/Button";
import { IconsEnum } from "../../components/Icon/Icon";
import { InfoItem } from "../../components/InfoItem";
import { PanelTitle } from "../../components/Panel";
import { Stack } from "../../layouts/Stack";

export const ResultInfo = ({ onClick }: { onClick: () => void }) => {
  const { text } = useContext(LanguageContext);

  const items = text.gameWizard.info.items;
  const icons = [
    IconsEnum.Flag,
    IconsEnum.Timer,
    IconsEnum.Sort,
    IconsEnum.Chat,
    IconsEnum.Result,
  ];

  return (
    <>
      <PanelTitle>{text.gameWizard.info.title}</PanelTitle>
      <Stack gap="sm">
        {items?.map((item: any, index: number) => (
          <InfoItem
            key={index}
            icon={icons[index]}
            title={item.caption}
            text={item.text}
          />
        ))}
        <Button stretch onClick={onClick}>
          {text.gameWizard.info.understood}
        </Button>
      </Stack>
    </>
  );
};