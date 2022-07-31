import React from "react";
import styled, { css } from "styled-components";

import variables from "../../../../assets/scss/variables.module.scss";

import { BsArrowRightSquare } from "react-icons/bs";

import { Avatar, Card, CardProps } from "antd";
import Meta, { CardMetaProps } from "antd/lib/card/Meta";

interface Props extends CardProps, CardMetaProps {
   title: string;
   description: string;
   default: boolean;
   avatars?: string[];
}

const StyledCard = styled(Card)<Props>`
   &.ant-card {
      background-color: ${variables.bgGroup};
      border-radius: 25px;
      border: none;
      padding: 20px 28px;

      ${(props) =>
         props.default &&
         css`
            text-align: center;
            padding: 30px 0px;
         `};

      .ant-card-body {
         padding: 0px;
      }

      .ant-card-meta {
         display: block;
         font-size: 1.3rem;
         font-weight: 600;

         &-title {
            font-size: 3.5rem;
            color: ${variables.txtPrimary};
         }

         &-description {
            color: ${variables.txtSecondary};
         }
      }
   }

   .card-content {
      .title {
         color: ${variables.txtPrimary};
         margin-bottom: 10px;
         font-size: 1.5rem;
      }

      &-body {
         display: flex;
         align-items: flex-end;
         justify-content: space-between;

         .ant-avatar {
            border: none;

            &-square {
               border-radius: 15px;
            }
         }

         .checkout {
            display: flex;
            align-items: center;
            gap: 10px;

            color: ${variables.txtSecondary};
            font-weight: 700;
            font-size: 1.38rem;

            user-select: none;
            cursor: pointer;

            &:hover {
               opacity: 0.8;
            }
         }
      }
   }
`;

const CardItem: React.FC<Props> = (props) => {
   const { title, description } = props;
   return (
      <StyledCard {...props} title="">
         {props.default ? (
            <Meta title={title} description={description} />
         ) : (
            <div className="card-content">
               <h3 className="title">{title}</h3>
               <div className="card-content-body">
                  <Avatar.Group>
                     {props.avatars &&
                        props?.avatars.map((item, index) => (
                           <Avatar
                              shape="square"
                              size={60}
                              key={index}
                              src={item}
                           />
                        ))}
                  </Avatar.Group>
                  <div className="checkout">
                     <span>{description}</span>
                     <BsArrowRightSquare />
                  </div>
               </div>
            </div>
         )}
      </StyledCard>
   );
};

CardItem.defaultProps = {
   default: true,
};
export default CardItem;
