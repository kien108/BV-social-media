import React from "react";
import styled from "styled-components";

import variables from "../../../../assets/scss/variables.module.scss";

import per1 from "../../../../assets/images/per1.png";
import per2 from "../../../../assets/images/per2.png";
import per3 from "../../../../assets/images/per3.png";
import per4 from "../../../../assets/images/per4.png";

import CardItem from "../../components/card";

import Button from "../../../../components/button";

import { Col, Row } from "antd";
import { motion } from "framer-motion";

const avatars = [per1, per2, per3, per4];

const StyledCalendarContent = styled(motion.div)`
   .calendar-body-header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .title {
         color: ${variables.txtPrimary};
         font-weight: 800;
      }
   }
`;

const CalendarContent = () => {
   return (
      <StyledCalendarContent
         initial={{
            x: "100%",
         }}
         animate={{
            x: 0,
         }}
         transition={{
            duration: 1,
         }}
      >
         <Row gutter={[30, 30]}>
            <Col span={24}>
               <Row className="calendar-body-header">
                  <h2 className="title">Post Schedule</h2>
                  <Button size="large">Create a Post</Button>
               </Row>
            </Col>
            <Col span={12}>
               <CardItem
                  default={false}
                  avatars={avatars}
                  title="Last Month Highlights"
                  description="Check out"
               />
            </Col>
            <Col span={6}>
               <CardItem default title="2" description="Scheduled for today" />
            </Col>
            <Col span={6}>
               <CardItem default title="3" description="Posted this week" />
            </Col>
         </Row>
      </StyledCalendarContent>
   );
};

export default CalendarContent;
