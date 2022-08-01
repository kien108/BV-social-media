import React from "react";
import styled from "styled-components";

import variables from "../../assets/scss/variables.module.scss";
import { devices } from "../../utils/devices";

import avatar from "../../assets/images/per1.png";

import Button from "../../components/button";
import { LogoutOutlined } from "@ant-design/icons";

import { motion } from "framer-motion";

const StyledNavFooter = styled(motion.div)`
   display: flex;
   align-items: center;
   flex-direction: column;
   background-color: ${variables.navFooter};
   color: ${variables.txtPrimary};
   gap: 15px;
   padding: 20px 0;
   border-radius: 20px;
   font-family: ${variables.font};
   margin-top: auto;
   display: none;

   @media ${devices.laptop} {
      display: flex;
   }

   .img {
      width: 60px;
      aspect-ratio: 1;
      border-radius: 100%;
      overflow: hidden;
      img {
         object-fit: cover;
         width: 100%;
         height: 100%;
      }
   }

   .information {
      display: flex;
      align-items: center;
      flex-direction: column;
      color: ${variables.txtPrimary};
      margin-bottom: 10px;

      .name {
         font-weight: 600;
      }
      .email {
         color: ${variables.txtSecondary};
         font-size: 1.3rem;
         font-weight: 500;
      }
   }
`;

const NavFooter = () => {
   return (
      <StyledNavFooter
         initial={{
            x: "100%",
         }}
         animate={{
            x: 0,
         }}
         transition={{
            duration: 0.8,
         }}
      >
         <div className="img">
            <img src={avatar} alt="" />
         </div>
         <div className="information">
            <span className="name">Vanessa</span>
            <span className="email">@vanessasays</span>
         </div>

         <Button icon={<LogoutOutlined />}>Sign out</Button>
      </StyledNavFooter>
   );
};

export default NavFooter;
