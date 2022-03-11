import { createElement, Fragment } from "react";
import { ButtonType } from "./Button.types";

// demo text
const text = createElement(Fragment, null, "Click me");

export const ButtonData: ButtonType = {
  onClick: () => alert("clicked"),
  children: text,
};
