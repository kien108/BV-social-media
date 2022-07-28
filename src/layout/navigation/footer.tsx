import React from "react";
import variables from "../../assets/scss/variables.module.scss";
import Button from "../../components/button";
import { LogoutOutlined } from "@ant-design/icons";
import styled from "styled-components";

const StyledNavFooter = styled.div`
   display: flex;
   align-items: center;
   flex-direction: column;
   background-color: ${variables.navFooter};
   color: ${variables.txtPrimary};
   gap: 10px;

   .name {
      display: block;
   }
   .email {
      color: ${variables.txtSecondary};
   }
`;

const NavFooter = () => {
   return (
      <StyledNavFooter>
         <div className="img">
            <img src="" alt="" />
         </div>
         <div className="information">
            <span className="name">Vanessa</span>
            <span className="email">@vanessasays</span>
         </div>

         <Button size="large" icon={<LogoutOutlined />}>
            Sign out
         </Button>
      </StyledNavFooter>
   );
};

export default NavFooter;
