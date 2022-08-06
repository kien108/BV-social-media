import { Button } from "antd";
import styled from "styled-components";
import variables from "../../assets/scss/variables.module.scss";

import { BtnProps } from "./";

const StyledButton = styled(Button)<BtnProps>`
   &.ant-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      background: red;
      gap: 4px;
      transition: all 0.2s ease-in-out;
      color: ${variables.txtPrimary};
      background-color: ${variables.primary};
      font-weight: 700;
      border: none;

      padding: 22px;
      font-size: 13px;
      border-radius: 25px;
      margin: 0;

      width: ${(props) => (props.full ? "100%" : "auto")};

      .anticon {
         width: 20px;
      }

      &:hover {
         opacity: 0.8;
      }
      .anticon svg {
         width: 100%;
         height: 100%;
      }

      &-lg {
         padding: 22px 35px;
         font-size: 13px;
         border-radius: 25px;
         margin: 0;

         .anticon {
            width: 20px;
         }
      }

      &-circle {
         width: 45px;
         height: 45px;
         padding: 0;
      }
   }
`;

export default StyledButton;
