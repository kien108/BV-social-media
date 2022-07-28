import React from "react";
import variables from "../../assets/scss/variables.module.scss";
import { devices } from "../../utils/devices";

import NavHeader from "./header";
import styled from "styled-components";
import NavFooter from "./footer";
import Menu from "../../components/menu";

import {
   PieChartOutlined,
   CalendarOutlined,
   BarChartOutlined,
   InfoCircleOutlined,
   FileTextOutlined,
   SettingOutlined,
} from "@ant-design/icons";

function getItem(
   label: string,
   key: string,
   icon: any,
   children: any,
   type: string
) {
   return {
      key,
      icon,
      children,
      label,
      type,
   };
}

const items = [
   getItem("Dashboard", "1", <PieChartOutlined />, null, ""),
   getItem("Calendar", "2", <CalendarOutlined />, null, ""),
   getItem("Analytics", "3", <BarChartOutlined />, null, ""),
   getItem("Ads", "4", <InfoCircleOutlined />, null, ""),
   getItem("Campaigns", "5", <FileTextOutlined />, null, ""),
   getItem("Settings", "6", <SettingOutlined />, null, ""),
];

const StyledNav = styled.nav`
   display: flex;
   height: 100%;
   flex-direction: column;

   .ant-menu {
      margin-top: 2rem;
   }

   @media ${devices.desktop} {
      .ant-menu {
         margin-top: 8rem;
      }
   }
`;

const Navigation: React.FC = () => {
   return (
      <StyledNav>
         <NavHeader />
         <Menu items={items} defaultSelectedKeys={["1"]} />
         <NavFooter />
      </StyledNav>
   );
};

export default Navigation;
