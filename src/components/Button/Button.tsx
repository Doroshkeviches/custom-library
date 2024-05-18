import React from "react";
export interface ButtonProps {
  label: string;
}
const Button = (props: ButtonProps) => {
  return <button>Всеслав крутой пацан , установил библу и написал: {props.label}</button>;
};
export default Button;