import React, { ReactElement, ReactText } from "react";
import StyledMenu from "./styles";

interface Props {
   items: any;
   defaultSelectedKeys?: string[];
   mode?: string;
   theme?: string;
}

const Menu: React.FC<Props> = (props: any) => {
   return <StyledMenu {...props} />;
};

export default Menu;
