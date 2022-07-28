import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
   background-color: blue;
`;

const Header: React.FC = () => {
   return <StyledHeader>HEADER</StyledHeader>;
};

export default Header;
