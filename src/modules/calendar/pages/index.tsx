import React from "react";
import styled from "styled-components";

import variables from "../../../assets/scss/variables.module.scss";

import per1 from "../../../assets/images/per1.png";
import per2 from "../../../assets/images/per2.png";
import per3 from "../../../assets/images/per3.png";
import per4 from "../../../assets/images/per4.png";
import post1 from "../../../assets/images/post1.png";
import post2 from "../../../assets/images/post2.png";
import post3 from "../../../assets/images/post3.png";

import CalendarContent from "../container/content";
import CalendarFooter from "../container/footer";
import CalendarHeader from "../container/header";
import Post from "../container/post";

import { Col, Row } from "antd";
import { IPost } from "../interface";

const StyledCalendarPage = styled.section`
   .calendar-content-container {
      padding: 30px 35px;
      height: 100vh;
      overflow-y: scroll;

      &::-webkit-scrollbar {
         display: none;
      }
   }

   .post {
      padding: 30px 35px;
      background-color: ${variables.bgGroup};
      border-top-left-radius: 50px;
      border-bottom-left-radius: 40px;
      height: 100vh;
      overflow-y: scroll;

      &::-webkit-scrollbar {
         width: 6px;
      }

      &::-webkit-scrollbar-thumb {
         background-color: ${variables.primary};
         border-radius: 20px;
      }
   }
`;

const posts: IPost[] = [
   {
      id: "post1",
      images: [post3],
      date: [
         new Date("September 3, 2022 23:00:00"),
         new Date("September 3, 2022 23:30:00"),
      ],
      description: "hihi",
      tag: ["a", "b"],
   },
   {
      id: "post2",
      images: [per2],
      date: [
         new Date("September 12, 2022 23:00:00"),
         new Date("September 12, 2022 23:30:00"),
      ],
      description: "hihi",
      tag: ["a", "b"],
   },
   {
      id: "post3",
      images: [per3, per4],
      date: [
         new Date("September 16, 2022 23:00:00"),
         new Date("September 16, 2022 23:30:00"),
      ],
      description: "hihi",
      tag: ["a", "b"],
   },
   {
      id: "post4",
      images: [post2],
      date: [
         new Date("September 19, 2022 23:00:00"),
         new Date("September 19, 2022 23:30:00"),
      ],
      description: "hihi",
      tag: ["a", "b"],
   },
   {
      id: "post5",
      images: [post1],
      date: [
         new Date("September 25, 2022 23:00:00"),
         new Date("September 25, 2022 23:30:00"),
      ],
      description: "hihi",
      tag: ["a", "b"],
   },
];
const CalendarPage = () => {
   return (
      <StyledCalendarPage>
         <Row>
            <Col span={17}>
               <Row gutter={[30, 30]} className="calendar-content-container">
                  <Col span={24}>
                     <CalendarHeader />
                  </Col>
                  <Col span={24}>
                     <CalendarContent />
                  </Col>
                  <Col span={24}>
                     <CalendarFooter posts={posts} />
                  </Col>
               </Row>
            </Col>
            <Col span={7} className="post">
               <Post />
            </Col>
         </Row>
      </StyledCalendarPage>
   );
};

export default CalendarPage;
