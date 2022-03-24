export type ButtonType = {
  children: React.ReactNode;
  onClick: () => void;
  variation?: "default" | "line" | "whiteActive" | "whiteInactive";
  stretch?: boolean;
};
