import { IconsEnum } from "./Icon";

export type IconType = {
  className?: string;
  icon: IconsEnum;
  color?: string;
  infoIcon?: boolean;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
};
