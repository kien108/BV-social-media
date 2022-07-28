import React from "react";
import styled from "styled-components";

import variables from "../assets/scss/variables.module.scss";
import { devices } from "../utils/devices";

import { Layout as AntLayout } from "antd";
import Header from "./header";
import Navigation from "./navigation";
const { Footer, Content, Sider } = AntLayout;

const StyledLayout = styled(AntLayout)`
   height: 100vh;

   .ant-layout-sider {
      max-width: none !important;

      @media ${devices.laptop} {
         flex-basis: 12.5% !important;
      }

      &-children {
         padding: 20px 0px;

         @media ${devices.laptop} {
            padding: 30px 20px;
         }
         background: ${variables.black};
      }
   }

   .ant-layout {
      background-color: ${variables.black};
   }
`;

const Layout = () => {
   return (
      <StyledLayout hasSider>
         <Sider breakpoint="lg" collapsedWidth="0">
            <Navigation />
         </Sider>

         <AntLayout style={{ flexBasis: "100%" }}>
            <Content
               style={{ backgroundColor: "#191c24", borderRadius: "40px" }}
            >
               day la content
            </Content>
         </AntLayout>
      </StyledLayout>
   );
};

export default Layout;
