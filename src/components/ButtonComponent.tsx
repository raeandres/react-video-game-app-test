import React from "react";

const colorList = [
  "primary",
  "secondary",
  "success",
  "danger",
  "warning",
  "info",
  "light",
  "dark",
  "link",
];

interface Props {
  children: string;
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark"
    | "link";
  handleAction: (item: string) => void;
}

const getColor = (colour: string) => {
  return colour ? colour : "primary";
};

const ButtonComponent = ({ children, color, handleAction }: Props) => {
  return (
    <div
      className={"btn btn-" + getColor(color as string)}
      onClick={() => {
        handleAction(children);
      }}
    >
      ButtonComponent
    </div>
  );
};

export default ButtonComponent;
