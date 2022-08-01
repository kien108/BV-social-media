import React from "react";
import styled from "styled-components";

import per1 from "../../../../assets/images/per1.png";
import per2 from "../../../../assets/images/per1.png";

import variables from "../../../../assets/scss/variables.module.scss";

import { Table, Avatar } from "antd";
import { Typography } from "antd";
import { motion } from "framer-motion";

import { IPost } from "../../interface";

const { Column } = Table;
const { Title } = Typography;

const $$ = document.querySelectorAll.bind(document);

const StyledCalendarFooter = styled(Table)`
   .ant-table-thead {
      border: none !important;

      .ant-table-cell {
         background-color: ${variables.bgGroupContent};
         text-align: center;
         padding: 10px 0px;
         border: none !important;
         color: ${variables.txtSecondary};
         font-weight: 700;
         font-size: 1.25rem;
      }
   }

   .ant-table-tbody {
      .ant-table-cell {
         padding: 0;
         cursor: pointer;
         user-select: none;
         border: none !important;
         font-weight: 600;
         color: ${variables.txtThird};

         .cell {
            padding: 20px 10px;
            height: 103px;
            background-color: ${variables.bgCalendarPrimary};
            border: 0.5px solid rgba(204, 204, 204, 0.05);

            &-active {
               background-image: linear-gradient(
                  to bottom right,
                  #643884,
                  #463697
               );
               border: none;
            }

            &-weekend {
               background-color: ${variables.bgCalendarSecondary};
            }

            span {
               text-align: end;
               display: block;
               width: 100%;
            }

            .imgs {
               .ant-avatar {
                  width: 35px;
                  height: 35px;
               }
            }

            .ant-avatar {
               border: none;
               box-shadow: 0 0 4px 2.5px rgba(204, 204, 204, 0.3);

               &-square {
                  border-radius: 10px;
               }
            }
         }
      }
   }
`;

interface Props {
   posts: IPost[];
   handelSelectedPost: (id: string) => void;
}

const CalendarFooter: React.FC<Props> = (props) => {
   const { posts, handelSelectedPost } = props;

   const formatDate = (day: number, days: number) => {
      return day > days ? day % days : day;
   };

   const getPost = (date: number, days: number) => {
      const post = posts.find((post) => post.date[0].getDate() === date);

      return post
         ? {
              day: formatDate(date, days),
              images: post.images,
              id: post.id,
           }
         : {
              day: formatDate(date, days),
           };
   };

   const formatDataCol = (year: number, month: number) => {
      const days = new Date(2022, 8, 0).getDate();
      const formattedData = [];

      for (let i = 1; i <= days; i += 7) {
         formattedData.push({
            key: i,
            mon: getPost(i, days),
            tue: getPost(i + 1, days),
            wed: getPost(i + 2, days),
            thu: getPost(i + 3, days),
            fri: getPost(i + 4, days),
            sat: getPost(i + 5, days),
            sun: getPost(i + 6, days),
         });
      }

      return formattedData;
   };

   const data = formatDataCol(2022, 8);

   const handelSelectedCell = (e: any, id: string) => {
      const cells = $$(".cell");
      cells.forEach((item) => {
         item.classList.remove("cell-active");
      });

      e.target.closest(".cell").classList.add("cell-active");

      handelSelectedPost(id);
   };

   const renderCol = (
      title: string,
      dataIndex: string,
      key: string,
      weekend: boolean
   ) => (
      <Column
         width={"14.285%"}
         title={title}
         dataIndex={dataIndex}
         key={key}
         render={(item) => (
            <div
               className={`cell ${weekend ? "cell-weekend" : ""}`}
               onClick={(e) => handelSelectedCell(e, item.id)}
            >
               <span>{item?.day}</span>

               {item?.images && (
                  <Avatar.Group className="imgs">
                     {item.images.length > 0 &&
                        item.images.map((img: string, index: number) => (
                           <Avatar src={img} key={index} shape="square" />
                        ))}
                  </Avatar.Group>
               )}
            </div>
         )}
      />
   );

   const dataCols = [
      {
         title: "Mon",
         dataIndex: "mon",
         key: "mon",
         weekend: false,
      },
      {
         title: "Tue",
         dataIndex: "tue",
         key: "tue",
         weekend: false,
      },
      {
         title: "Wed",
         dataIndex: "wed",
         key: "wed",
         weekend: false,
      },
      {
         title: "Thu",
         dataIndex: "thu",
         key: "thu",
         weekend: false,
      },
      {
         title: "Fri",
         dataIndex: "fri",
         key: "fri",
         weekend: false,
      },
      {
         title: "Sat",
         dataIndex: "sat",
         key: "sat",
         weekend: true,
      },
      {
         title: "Sun",
         dataIndex: "sun",
         key: "sun",
         weekend: true,
      },
   ];
   return (
      <motion.div
         className=""
         initial={{
            y: "100%",
         }}
         animate={{
            y: 0,
         }}
         transition={{
            duration: 1.2,
         }}
      >
         <Title
            level={2}
            style={{
               color: "white",
               fontSize: "21px",
            }}
         >
            September
         </Title>
         <StyledCalendarFooter dataSource={data} pagination={false}>
            {dataCols?.length > 0 &&
               dataCols.map((item, id) =>
                  renderCol(item.title, item.dataIndex, item.key, item.weekend)
               )}
         </StyledCalendarFooter>
      </motion.div>
   );
};

export default CalendarFooter;
