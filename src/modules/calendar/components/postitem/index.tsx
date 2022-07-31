import React, { ReactElement } from "react";
import styled from "styled-components";

import variables from "../../../../assets/scss/variables.module.scss";

import { Carousel } from "antd";

import { BsCalendar4 } from "react-icons/bs";
import { AiOutlineClockCircle, AiOutlineCloseCircle } from "react-icons/ai";

import moment from "moment";

import { motion } from "framer-motion";

interface Props {
   title: string;
   icon?: ReactElement;
   images?: string[];
   description?: string;
   date?: Date[];
   tags?: string[];
}

const StyledPost = styled.div`
   color: ${variables.txtSecondary};

   .post-header {
      display: flex;
      align-items: center;
      gap: 1rem;
      font-weight: 700;
      margin-bottom: 1rem;
      font-size: 1.5rem;
   }

   .post-content {
      .slick-slider {
         margin-bottom: 2rem;

         .slick-dots {
            margin-bottom: 0px;
            bottom: -15px;

            .slick-active {
               button {
                  width: 22px;
               }
            }

            button {
               height: 4px;
               border-radius: 10px;
               width: 14px;
            }
         }

         .img {
            width: 100%;
            aspect-ratio: 4/3;
            border-radius: 25px;
            overflow: hidden;

            img {
               object-fit: cover;
               width: 100%;
               height: 100%;
            }
         }
      }

      .description {
         color: ${variables.txtThird};
         font-size: 1.35rem;
         background-color: ${variables.bgGroupContent};
         padding: 15px 20px;
         border-radius: 20px;
         font-weight: 500;
      }

      .post-time {
         color: ${variables.txtThird};

         &-item {
            display: flex;
            align-items: center;
            gap: 1rem;

            .day,
            .hour {
               background-color: ${variables.bgGroupContent};
               padding: 6px 20px;
               border-radius: 15px;
               font-size: 1.35rem;
               font-weight: 500;
               display: flex;
               align-items: center;
               gap: 10px;
            }

            .dot {
               background-color: ${variables.txtPrimary};
               width: 8px;
               height: 8px;
               border-radius: 100%;
            }
         }
      }

      .tags {
         display: flex;
         align-items: center;
         flex-wrap: wrap;
         gap: 15px;

         .tag {
            display: flex;
            align-items: center;
            gap: 20px;

            color: ${variables.txtPrimary};
            font-size: 1.35rem;

            background-image: linear-gradient(to right, #994fdb, #6d4cfa);
            padding: 8px 10px;
            border-radius: 20px;

            cursor: pointer;
            user-select: none;
         }
      }
   }
`;

const renderImage = (images: string[]) => {
   return (
      <Carousel autoplay autoplaySpeed={2000}>
         {images.map((item, index) => (
            <div className="img" key={index} style={{ backgroundImage: item }}>
               <img src={item} alt="" />
            </div>
         ))}
      </Carousel>
   );
};

const renderDescription = (description: string) => {
   return <p className="description">{description}</p>;
};

const renderDate = (date: Date[]) => {
   return (
      <div className="post-time">
         {date.map((item, index) => (
            <div className="post-time-item" key={index}>
               <div className="day">
                  <BsCalendar4 />
                  <span>{formatDay(item).day}</span>
               </div>
               <span className="dot"></span>
               <div className="hour">
                  <AiOutlineClockCircle />
                  <span>{formatDay(item).hour}</span>
               </div>
            </div>
         ))}
      </div>
   );
};

const renderTags = (tags: string[]) => {
   return (
      <div className="tags">
         {tags.map((item, index) => (
            <div className="tag" key={index}>
               <span>{item}</span>
               <AiOutlineCloseCircle />
            </div>
         ))}
      </div>
   );
};

const formatDay = (date: Date) => {
   return {
      day: moment(date).format("DD MMMM"),
      hour: moment(date).format("h:mm a"),
   };
};

const PostItem: React.FC<Props> = (props) => {
   return (
      <StyledPost>
         <motion.div
            className="post-header"
            initial={{
               x: "-100%",
            }}
            animate={{
               x: 0,
            }}
            transition={{
               duration: 0.7,
            }}
         >
            <span>{props.title}</span>
            {props.icon}
         </motion.div>
         <motion.div
            className="post-content"
            initial={{
               x: "100%",
            }}
            animate={{
               x: 0,
            }}
            transition={{
               duration: 0.7,
            }}
         >
            {props.images && renderImage(props.images)}
            {props.description && renderDescription(props.description)}
            {props.date && renderDate(props.date)}
            {props.tags && renderTags(props.tags)}
         </motion.div>
      </StyledPost>
   );
};

export default PostItem;
