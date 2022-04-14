import cx from "classnames";
import { memo, ReactElement } from "react";
import styles from "./Icon.module.css";
import { IconType } from "./Icon.types";

export enum IconsEnum {
  Info,
  Copy,
  Close,
  Timer,
  Check,
  Settings,
  SettingsOutline,
  Lock,
  Person,
  Remove,
  Add,
  AddCircle,
  Swap,
  Link,
  Clock,
  Columns,
  Chat,
  Ask,
  Important,
  LockOpen,
  LockClosed,
  Flag,
  Sort,
  Smile,
  Talk,
  Hand,
  Result,
  ScreenShare,
  Code,
  Language,
}

export const iconNames = Object.values(IconsEnum).filter(
  (x) => typeof x === "string"
);

export const iconKeys = Object.keys(IconsEnum).filter(
  (x) => !isNaN(parseInt(x))
);

const Icons: { [key in IconsEnum]: ReactElement } = {
  [IconsEnum.Info]: (
    <path
      d="M11 7h2v2h-2V7Zm0 4h2v6h-2v-6Zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z"
      fill="currentColor"
    />
  ),
  [IconsEnum.Copy]: (
    <path
      d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1Zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2Zm0 16H8V7h11v14Z"
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 1h6v2H9V1Zm11.45 4.97-1.42 1.42A8.994 8.994 0 0 1 12 22c-4.98 0-9-4.03-9-9a9 9 0 0 1 9-9c2.12 0 4.07.74 5.62 1.98l1.42-1.42c.51.42.98.9 1.41 1.41ZM11 8v6h2V8h-2Z"
      fill="currentColor"
    />
  ),
  [IconsEnum.Check]: (
    <path
      d="m8.4 21.45-6.9-6.9 3-2.85 3.9 3.9L19.5 4.5l3 3L8.4 21.45Z"
      fill="currentColor"
    />
  ),
  [IconsEnum.Settings]: (
    <path
      d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94 0 .31.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58ZM12 15.6A3.61 3.61 0 0 1 8.4 12c0-1.98 1.62-3.6 3.6-3.6s3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6Z"
      fill="currentColor"
    />
  ),
  [IconsEnum.SettingsOutline]: (
    <path
      d="M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46a.5.5 0 0 0-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65A.488.488 0 0 0 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1a.566.566 0 0 0-.18-.03c-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46a.5.5 0 0 0 .61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65Zm-1.98-1.71c.04.31.05.52.05.73 0 .21-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74 0-.2.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7.14 1.13ZM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4Zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Z"
      fill="currentColor"
    />
  ),
  [IconsEnum.Lock]: (
    <path
      d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2Zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2Z"
      fill="currentColor"
    />
  ),
  [IconsEnum.Person]: (
    <path
      d="M12 12c2.762 0 5-2.238 5-5 0-2.763-2.238-5-5-5S7 4.237 7 7c0 2.762 2.238 5 5 5Zm0 2.5c-3.338 0-10 1.675-10 5V22h20v-2.5c0-3.325-6.662-5-10-5Z"
      fill="currentColor"
    />
  ),
  [IconsEnum.Remove]: (
    <path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm5 11H7v-2h10v2Z"
      fill="currentColor"
    />
  ),
  [IconsEnum.Add]: (
    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2Z" fill="currentColor" />
  ),
  [IconsEnum.AddCircle]: (
    <path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2Z"
      fill="currentColor"
    />
  ),
  [IconsEnum.Swap]: (
    <path
      d="M16 17.01V10h-2v7.01h-3L15 21l4-3.99h-3ZM9 3 5 6.99h3V14h2V6.99h3L9 3Zm7 14.01V10h-2v7.01h-3L15 21l4-3.99h-3ZM9 3 5 6.99h3V14h2V6.99h3L9 3Z"
      fill="currentColor"
    />
  ),
  [IconsEnum.Link]: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m2 4.22 1.41-1.41 16.97 16.97-1.41 1.41-7.08-7.08c-1.78.02-3.54.71-4.89 2.06l-2-2a9.823 9.823 0 0 1 4.41-2.54L7.17 9.39c-1.52.62-2.94 1.55-4.17 2.78l-2-2C2.22 8.96 3.59 8 5.05 7.27L2 4.22Zm21 5.95-2 2a12.747 12.747 0 0 0-9.12-3.73L9.3 5.86c4.83-.84 9.97.58 13.7 4.31Zm-11 11-3-3a4.237 4.237 0 0 1 6 0l-3 3Zm7-7a9.895 9.895 0 0 0-3.72-2.33l3.02 3.02.7-.69Z"
      fill="currentColor"
    />
  ),
  [IconsEnum.Clock]: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.945 3.441 6.663 1.905 2.056 5.75l1.281 1.536L7.945 3.44Zm9.392-1.535 4.607 3.843-1.281 1.536-4.608-3.843 1.282-1.536ZM12.5 8.095H11v6l4.75 2.85.75-1.23-4-2.37v-5.25Zm-.5-4a9 9 0 1 0 .001 18.001 9 9 0 0 0 0-18.001Zm-7 9c0 3.86 3.14 7 7 7s7-3.14 7-7-3.14-7-7-7-7 3.14-7 7Z"
      fill="currentColor"
    />
  ),
  [IconsEnum.Columns]: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 5a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V5Zm4 0h6v14h-6V5Zm0 16a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-6Z"
      fill="currentColor"
    />
  ),
  [IconsEnum.Chat]: (
    <path
      d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2Z"
      fill="currentColor"
    />
  ),
  [IconsEnum.Ask]: (
    <path
      d="M11.85 1C6.691 1 2.5 5.191 2.5 10.35s4.191 9.35 9.35 9.35h.55V23c5.346-2.574 8.8-7.7 8.8-12.65C21.2 5.191 17.009 1 11.85 1Zm1.1 15.95h-2.2v-2.2h2.2v2.2Zm0-3.85h-2.2c0-3.575 3.3-3.3 3.3-5.5 0-1.21-.99-2.2-2.2-2.2-1.21 0-2.2.99-2.2 2.2h-2.2c0-2.431 1.969-4.4 4.4-4.4s4.4 1.969 4.4 4.4c0 2.75-3.3 3.025-3.3 5.5Z"
      fill="currentColor"
    />
  ),
  [IconsEnum.Important]: (
    <path
      d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2Zm-7 9h-2V5h2v6Zm0 4h-2v-2h2v2Z"
      fill="currentColor"
    />
  ),
  [IconsEnum.LockOpen]: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 8.501h3v-1.79c0-2.61 1.91-4.94 4.51-5.19A5.008 5.008 0 0 1 17 6.501h-2c0-1.13-.6-2.24-1.64-2.7-2.21-.99-4.36.6-4.36 2.7v2h11v14H4v-14Zm2 2v10h12v-10H6Zm4 5c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2Z"
      fill="currentColor"
    />
  ),
  [IconsEnum.LockClosed]: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 8.501h3v-1.79c0-2.61 1.91-4.94 4.51-5.19A5.008 5.008 0 0 1 17 6.501h-2c0-1.13-.6-2.24-1.64-2.7-2.21-.99-4.36.6-4.36 2.7v2h11v14H4v-14Zm2 2v10h12v-10H6Zm4 5c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2Z"
      fill="currentColor"
    />
  ),
  [IconsEnum.Flag]: (
    <path d="M14.4 6 14 4H5v17h2v-7h5.6l.4 2h7V6h-5.6Z" fill="currentColor" />
  ),
  [IconsEnum.Sort]: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m12 2-5.5 9h11L12 2Zm5.5 20a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM11 13.5H3v8h8v-8Z"
      fill="currentColor"
    />
  ),
  [IconsEnum.Smile]: (
    <path
      d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2ZM8.5 8c.83 0 1.5.67 1.5 1.5S9.33 11 8.5 11 7 10.33 7 9.5 7.67 8 8.5 8ZM12 18c-2.28 0-4.22-1.66-5-4h10c-.78 2.34-2.72 4-5 4Zm3.5-7c-.83 0-1.5-.67-1.5-1.5S14.67 8 15.5 8s1.5.67 1.5 1.5-.67 1.5-1.5 1.5Z"
      fill="currentColor"
    />
  ),
  [IconsEnum.Talk]: (
    <path
      d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1Zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1Z"
      fill="currentColor"
    />
  ),
  [IconsEnum.Hand]: (
    <>
      <path
        d="M4.456 21.397a7.972 7.972 0 0 1-1.683-8.782L6.01 5.09a1 1 0 0 1 1.81-.057l.375.743c.269.523.29 1.152.057 1.697l-1.5 3.493.531.53 8.308-8.308a1.25 1.25 0 0 1 1.768 1.767l-6.187 6.188.707.707 7.602-7.602a1.25 1.25 0 0 1 1.767 1.768l-7.601 7.601.707.708 6.54-6.541a1.25 1.25 0 0 1 1.769 1.768l-6.541 6.54.707.707 4.42-4.419a1.25 1.25 0 0 1 1.767 1.768l-7.248 7.248a7.998 7.998 0 0 1-11.313 0Z"
        fill="currentColor"
      />

      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </>
  ),
  [IconsEnum.Result]: (
    <path
      d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2Zm-5 14H7v-2h7v2Zm3-4H7v-2h10v2Zm0-4H7V7h10v2Z"
      fill="currentColor"
    />
  ),
  [IconsEnum.ScreenShare]: (
    <path
      d="M20 18c1.1 0 1.99-.9 1.99-2L22 6a2 2 0 0 0-2-2H4c-1.11 0-2 .89-2 2v10a2 2 0 0 0 2 2H0v2h24v-2h-4Zm-7-3.53v-2.19c-2.78 0-4.61.85-6 2.72.56-2.67 2.11-5.33 6-5.87V7l4 3.73-4 3.74Z"
      fill="currentColor"
    />
  ),
  [IconsEnum.Code]: (
    <path
      d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2ZM7.64 15H6.49v-4.5l-.9.66-.58-.89L6.77 9h.87v6Zm5.86 0H9.61v-1.02c1.07-1.07 1.77-1.77 2.13-2.15.4-.42.54-.69.54-1.06 0-.4-.31-.72-.81-.72-.52 0-.8.39-.9.72l-1.01-.42c.01-.02.18-.76 1-1.15.69-.33 1.48-.2 1.95.03.86.44.91 1.24.91 1.48 0 .64-.31 1.26-.92 1.86-.25.25-.72.71-1.4 1.39l.03.05h2.37V15Zm5.25-.85c-.08.13-.56.85-1.76.85-.04 0-1.6.08-2.05-1.51l1.03-.41c.03.1.19.86 1.02.86.41 0 .89-.28.89-.77 0-.55-.48-.79-1.04-.79h-.5v-1h.46c.33 0 .88-.14.88-.72 0-.39-.31-.65-.75-.65-.5 0-.74.32-.85.64l-.99-.41C15.2 9.9 15.68 9 16.94 9c1.09 0 1.54.64 1.62.75.33.5.28 1.16.02 1.57-.15.22-.32.38-.52.48v.07c.28.11.51.28.68.52.37.52.33 1.27.01 1.76Z"
      fill="currentColor"
    />
  ),
  [IconsEnum.Language]: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 12C2 6.48 6.47 2 11.99 2 17.52 2 22 6.48 22 12s-4.48 10-10.01 10C6.47 22 2 17.52 2 12Zm13.97-4h2.95a8.03 8.03 0 0 0-4.33-3.56c.6 1.11 1.06 2.31 1.38 3.56ZM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96ZM4 12c0 .69.1 1.36.26 2h3.38c-.08-.66-.14-1.32-.14-2 0-.68.06-1.34.14-2H4.26c-.16.64-.26 1.31-.26 2Zm1.08 4h2.95c.32 1.25.78 2.45 1.38 3.56A7.987 7.987 0 0 1 5.08 16Zm0-8h2.95c.32-1.25.78-2.45 1.38-3.56-1.84.63-3.37 1.9-4.33 3.56ZM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96ZM9.5 12c0 .68.07 1.34.16 2h4.68c.09-.66.16-1.32.16-2 0-.68-.07-1.35-.16-2H9.66c-.09.65-.16 1.32-.16 2Zm5.09 7.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56ZM16.5 12c0 .68-.06 1.34-.14 2h3.38c.16-.64.26-1.31.26-2s-.1-1.36-.26-2h-3.38c.08.66.14 1.32.14 2Z"
      fill="currentColor"
    />
  ),
};

const IconComponent = ({ icon, className, color, infoIcon }: IconType) => {
  const colorStyle = color ? { color: color } : {};
  if (infoIcon) {
    const mask = `url(#icon-${icon})`;
    const id = `icon-${icon}`;
    return (
      <>
        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={cx(styles.icon, className)}
          mask="url(#grp)"
        >
          <rect width="24" height="24" fill="url(#a)" mask={mask} />
          <rect
            width="24"
            height="24"
            fill="url(#b)"
            mask={mask}
            fillOpacity="0.25"
          />
          <defs>
            <mask
              id={id}
              x="0"
              y="0"
              width="24"
              height="24"
              style={{ color: "white" }}
            >
              {Icons[icon]}
            </mask>
            <linearGradient
              id="a"
              x1="16"
              y1="2.667"
              x2="16"
              y2="29.333"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#196CFF" />
              <stop offset="1" stopColor="#196CFF" stopOpacity=".35" />
            </linearGradient>
            <pattern
              id="b"
              patternContentUnits="objectBoundingBox"
              width="1.875"
              height="1.875"
            >
              <use xlinkHref="#c" transform="scale(.0375)" />
            </pattern>
            <image
              id="c"
              width="50"
              height="50"
              xlinkHref="data:image/png;base64,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"
            />
          </defs>
        </svg>
      </>
    );
  }
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
