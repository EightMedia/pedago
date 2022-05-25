import cx from "classnames";
import { memo } from "react";
import { Icon, IconsEnum } from "../Icon/Icon";
import styles from "./Modal.module.css";
import { ModalType } from "./Modal.types";

const ModalComponent = ({ children, handleClose }: ModalType) => {
  return (
    <div className={cx(styles.wrapper)}>
      <div className={styles.backdrop} onClick={handleClose} />
      <div className={styles.modal}>
        <button onClick={handleClose} className={styles.closeButton}>
          <Icon icon={IconsEnum.Close} color={"#6E6A87"} size={"sm"} />
        </button>
        {children}
      </div>
    </div>
  );
};

export const Modal = memo(ModalComponent);
