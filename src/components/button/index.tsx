import { ButtonProps } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import StyledButton from "./styles";

export interface BtnProps extends ButtonProps {
   to?: string;
   full?: boolean;
}

const Button: React.FC<BtnProps> = (props) => {
   const { type, to } = props;

   const content =
      type === "link" ? (
         <Link to={`/${to}`}>
            <StyledButton {...props}>{props.children}</StyledButton>
         </Link>
      ) : (
         <StyledButton {...props}>{props.children}</StyledButton>
      );

   return content;
};

export default Button;
