import React from "react";
import { ButtonType } from "./Button.types";

// demo text
const text = React.createElement(React.Fragment, null, "Click me");

export const ButtonData: ButtonType = {
  onClick: () => alert("clicked"),
  children: text,
};
