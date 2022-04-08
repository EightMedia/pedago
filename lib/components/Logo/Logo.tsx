import cx from "classnames";
import { memo } from "react";
import styles from "./Logo.module.css";
import { LogoType } from "./Logo.types";

const LogoComponent = ({ className }: LogoType) => {
  return (
    <svg
      viewBox="0 0 270 82"
      width="270"
      height="82"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cx(className, styles.logo)}
    >
      <rect y="16" width="40" height="50" rx="6" fill="#fff" />
      <path
        d="M10 55h7.16v-8.12h2.76c6.12-.08 11-3.28 11-10v-.16C30.92 30.44 26.6 27 20 27H10v28Zm7.16-14v-7.84h2.48c2.6 0 4.08 1.32 4.08 3.88v.12c0 2.36-1.52 3.84-4.04 3.84h-2.52Z"
        fill="#12008A"
      />
      <rect x="46" width="40" height="50" rx="6" fill="#fff" />
      <path
        d="M56 39h19.44v-6.32H63.12v-4.8h10.96v-5.96H63.12v-4.6h12.16V11H56v28Z"
        fill="#12008A"
      />
      <rect x="92" y="16" width="40" height="50" rx="6" fill="#fff" />
      <path
        d="M101 55h9.08c9.08 0 14.24-5.6 14.24-13.84v-.48c0-8.24-5.12-13.68-14.12-13.68H101v28Zm9.28-21.56c4 0 6.68 2.36 6.68 7.4v.36c0 5-2.68 7.36-6.68 7.36h-2.08V33.44h2.08Z"
        fill="#12008A"
      />
      <rect x="138" y="32" width="40" height="50" rx="6" fill="#fff" />
      <path
        d="M144 71.16h7.4l1.6-5.04h8.8l1.64 5.04H171L161.12 43h-7.28L144 71.16Zm10.8-10.8 2.6-8.2 2.6 8.2h-5.2Z"
        fill="#12008A"
      />
      <rect x="184" y="16" width="40" height="50" rx="6" fill="#fff" />
      <path
        d="M204.44 55.96c4.24 0 7.64-1.52 10.28-3.48V39.12h-11.2v5.56h4.44v4.16c-.8.52-1.84.84-3.24.84-3.6 0-6.36-2.84-6.36-7.96v-.4c0-4.64 2.72-7.76 6.28-7.76 2.4 0 4 1 5.48 2.32l4-5.48c-2.72-2.2-5.64-3.4-9.64-3.4-7.72 0-13.48 5.84-13.48 14.24v.56c0 8.76 5.8 14.16 13.44 14.16Z"
        fill="#12008A"
      />
      <rect x="230" width="40" height="50" rx="6" fill="#fff" />
      <path
        d="M249.96 39.04c7.52 0 13-5.88 13-14.24v-.6c0-8.4-5.4-14.2-12.96-14.2-7.52 0-13 5.88-13 14.24v.6c0 8.4 5.4 14.2 12.96 14.2Zm.04-6.52c-3.32 0-5.64-2.96-5.64-7.8v-.44c0-4.84 2.28-7.76 5.6-7.76s5.64 2.96 5.64 7.8v.44c0 4.84-2.24 7.76-5.6 7.76Z"
        fill="#12008A"
      />
    </svg>
  );
};

export const Logo = memo(LogoComponent);
