import React from "react";
import styled, { css } from "styled-components";

import variables from "../../../../assets/scss/variables.module.scss";

import { IStory, EStoryStatus } from "../../interface";

import { FaTiktok } from "react-icons/fa";
import { BiGame } from "react-icons/bi";
import { RiVideoLine } from "react-icons/ri";

const boxShadow = (props: any) => `

`;

const statusIcons = (status: string) => {
   switch (status) {
      case EStoryStatus.free:
         return <BiGame size={"14px"} />;

      case EStoryStatus.video:
         return <RiVideoLine size={"14px"} />;
      default:
         return <FaTiktok size={"14px"} />;
   }
};

const StyledStory = styled.div<IStory>`
   color: white;

   width: 45px;
   height: 45px;
   border-radius: 100%;

   background-image: ${(props) => `url(${props.image})`};
   background-repeat: no-repeat;
   background-size: cover;
   background-position: center;

   position: relative;

   transition: all 0.2s linear;
   cursor: pointer;

   &:hover {
      opacity: 0.8;
   }

   ${({ border }) =>
      border &&
      css`
         box-shadow: 0 0 8px 3px ${variables.primary};
      `}

   .status {
      position: absolute;
      bottom: -8px;
      right: -10px;

      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 100%;
      background-color: rgba(34, 38, 47, 0.7);
      padding: 7px;
   }
`;

const Story: React.FC<IStory> = (props) => {
   return (
      <StyledStory {...props}>
         <div className="status">{statusIcons(props.status)}</div>
      </StyledStory>
   );
};

StyledStory.defaultProps = {
   border: false,
};

export default Story;
