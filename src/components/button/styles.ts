import { Button } from "antd";
import styled from "styled-components";
import variables from "../../assets/scss/variables.module.scss";

const StyledButton = styled(Button)`
   &.ant-btn {
      display: flex;
      align-items: center;
      background: red;

      &-lg {
         padding: 20px 25px;
         font-size: 16px;
         border-radius: 20px;
         color: ${variables.txtPrimary};
         background-color: ${variables.primary};
         border: none;
         margin: 0;
      }
   }
`;

export default StyledButton;
