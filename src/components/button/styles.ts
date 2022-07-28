import { Button } from "antd";
import styled from "styled-components";
import variables from "../../assets/scss/variables.module.scss";

const StyledButton = styled(Button)`
   &.ant-btn {
      display: flex;
      align-items: center;
      background: red;
      gap: 4px;
      transition: all 0.2s ease-in-out;

      &:hover {
         opacity: 0.8;
      }
      .anticon svg {
         width: 100%;
         height: 100%;
      }

      &-lg {
         padding: 22px 22px;
         font-size: 13px;
         font-weight: 700;
         border-radius: 25px;
         color: ${variables.txtPrimary};
         background-color: ${variables.primary};
         border: none;
         margin: 0;

         .anticon {
            width: 20px;
         }
      }
   }
`;

export default StyledButton;
