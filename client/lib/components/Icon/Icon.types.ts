import { IconsEnum } from "./Icon";

export type IconType = {
  className?: string;
  icon: IconsEnum;
  color?: string;
  infoIcon?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
};
