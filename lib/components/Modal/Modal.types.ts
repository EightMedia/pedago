import { ReactNode } from "react";

export type ModalType = {
  children: ReactNode;
  handleClose: () => void;
};
