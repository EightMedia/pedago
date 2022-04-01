import cx from "classnames";
import { memo, ReactElement } from "react";
import styles from "./Icon.module.css";
import { IconType } from "./Icon.types";

export enum IconsEnum {
  Person,
  Info,
  Settings,
  Close,
  Timer,
}

export const iconNames = Object.values(IconsEnum).filter(
  (x) => typeof x === "string"
);

export const iconKeys = Object.keys(IconsEnum).filter(
  (x) => !isNaN(parseInt(x))
);

const Icons: { [key in IconsEnum]: ReactElement } = {
  [IconsEnum.Person]: (
    <path
      d="M12 12c2.762 0 5-2.238 5-5 0-2.763-2.238-5-5-5S7 4.237 7 7c0 2.762 2.238 5 5 5Zm0 2.5c-3.338 0-10 1.675-10 5V22h20v-2.5c0-3.325-6.662-5-10-5Z"
      fill="currentColor"
    />
  ),
  [IconsEnum.Info]: (
    <path
      d="M11 7h2v2h-2V7Zm0 4h2v6h-2v-6Zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z"
      fill="currentColor"
    />
  ),
  [IconsEnum.Settings]: (
    <path
      d="M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46a.5.5 0 0 0-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65A.488.488 0 0 0 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1a.566.566 0 0 0-.18-.03c-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46a.5.5 0 0 0 .61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65Zm-1.98-1.71c.04.31.05.52.05.73 0 .21-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74 0-.2.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7.14 1.13ZM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4Zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Z"
      fill="currentColor"
    />
  ),
  [IconsEnum.Close]: (
    <path
      d="M22 3.75 20.25 2 12 10.25 3.75 2 2 3.75 10.25 12 2 20.25 3.75 22 12 13.75 20.25 22 22 20.25 13.75 12 22 3.75Z"
      fill="currentColor"
    />
  ),
  [IconsEnum.Timer]: (
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M9 1h6v2H9V1Zm11.45 4.97-1.42 1.42A8.994 8.994 0 0 1 12 22c-4.98 0-9-4.03-9-9a9 9 0 0 1 9-9c2.12 0 4.07.74 5.62 1.98l1.42-1.42c.51.42.98.9 1.41 1.41ZM11 8v6h2V8h-2Z"
      fill="currentColor"
    />
  ),
};

const IconComponent = ({ icon, className, color }: IconType) => {
  const colorStyle = color ? { color: color } : {};
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cx(styles.icon, className)}
      style={colorStyle}
    >
      {Icons[icon]}
    </svg>
  );
};

export const Icon = memo(IconComponent);
