import { MenuProps } from "antd";
import React from "react";
import StyledMenu from "./styles";

interface Props extends MenuProps {}

const Menu: React.FC<Props> = (props: any) => {
   return <StyledMenu {...props} />;
};

export default Menu;
