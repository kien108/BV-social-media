import { ButtonProps } from "antd";
import React from "react";
import StyledButton from "./styles";

interface Props extends ButtonProps {}

const Button: React.FC<Props> = (props: any) => {
   return <StyledButton {...props}>{props.children}</StyledButton>;
};

export default Button;
