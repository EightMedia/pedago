import { memo } from "react";
import { Icon } from "../Icon";
import { Text } from "../Text";
import { TextTitle } from "../TextTitle";
import styles from "./InfoItem.module.css";
import { InfoItemType } from "./InfoItem.types";

const InfoItemComponent = ({ title, text, icon }: InfoItemType) => {
  return (
    <div className={styles.item}>
      {icon && <Icon icon={icon} className={styles.icon} infoIcon />}
      <div className={styles.text}>
        <TextTitle>{title}</TextTitle>
        <Text tone="light">{text}</Text>
      </div>
    </div>
  );
};

export const InfoItem = memo(InfoItemComponent);
