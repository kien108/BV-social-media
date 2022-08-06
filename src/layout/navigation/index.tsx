import React from "react";
import styled from "styled-components";

import variables from "../../assets/scss/variables.module.scss";
import { devices } from "../../utils/devices";

import NavHeader from "./header";
import NavFooter from "./footer";
import Menu from "../../components/menu";

import { motion } from "framer-motion";

import { useNavigate, Navigate } from "react-router-dom";

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
   type: string,
   onClick: () => void
) {
   return {
      key,
      icon,
      children,
      label,
      type,
      onClick,
   };
}

const StyledNav = styled.nav`
   display: flex;
   height: 100%;
   flex-direction: column;

   .ant-menu {
      margin-top: 3rem;
      font-size: 1.38rem;
   }

   @media ${devices.desktop} {
      .ant-menu {
         margin-top: 8rem;
      }
   }
`;

const Navigation: React.FC = () => {
   const navigate = useNavigate();

   const items = [
      getItem("Dashboard", "1", <PieChartOutlined />, null, "", () =>
         navigate("/")
      ),
      getItem("Calendar", "2", <CalendarOutlined />, null, "", () =>
         navigate("/calendar")
      ),
      getItem("Analytics", "3", <BarChartOutlined />, null, "", () =>
         navigate("/analytics")
      ),
      getItem("Ads", "4", <InfoCircleOutlined />, null, "", () =>
         navigate("/ads")
      ),
      getItem("Campaigns", "5", <FileTextOutlined />, null, "", () =>
         navigate("/campaigns")
      ),
      getItem("Settings", "6", <SettingOutlined />, null, "", () =>
         navigate("/settings")
      ),
   ];

   return (
      <StyledNav>
         <NavHeader />
         <Menu items={items} defaultSelectedKeys={["1"]} />
         <NavFooter />
      </StyledNav>
   );
};

export default Navigation;
