import React from "react";
import variables from "../assets/scss/variables.module.scss";
import styled from "styled-components";
import { Layout as AntLayout } from "antd";
import Header from "./header";
import Navigation from "./navigation";
const { Footer, Content, Sider } = AntLayout;

const StyledLayout = styled(AntLayout)`
   height: 100vh;

   .ant-menu {
      margin-top: 8rem;
   }

   .ant-layout-sider {
      max-width: none !important;
      flex-basis: 12.5% !important;

      &-children {
         padding: 30px 20px;
         background: ${variables.black};
      }
   }
`;

const Layout = () => {
   return (
      <StyledLayout hasSider>
         <Sider>
            <Navigation />
         </Sider>

         <AntLayout>
            <Header />
            <Content style={{ backgroundColor: "red" }}>day la content</Content>
            <Footer style={{ backgroundColor: "orange" }}>Footer ne</Footer>
         </AntLayout>
      </StyledLayout>
   );
};

export default Layout;
