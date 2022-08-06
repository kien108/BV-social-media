import { InputProps } from "antd";
import React from "react";
import styled from "styled-components";
import Input from "../../input";

interface Props extends InputProps {
   field: any;
   form: any;

   layout?: string;
   label?: string;
}

const StyledSelectField = styled.div<{ layout?: string }>`
   display: flex;
   align-items: center;
   flex-direction: ${(props) =>
      props.layout === "vertical" ? "column" : "row"};
`;

const SelectField: React.FC<Props> = (props) => {
   const { form, field, label, layout, ...inputProps } = props;

   return (
      <StyledSelectField layout={layout}>
         {label && <label htmlFor={field.name}>{label}</label>}
         <Input {...inputProps} {...field} id={field.name} />
      </StyledSelectField>
   );
};

SelectField.defaultProps = {
   layout: "horizontal",
};

export default SelectField;
