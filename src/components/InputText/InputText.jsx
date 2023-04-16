import styled from "@emotion/styled";
import React from "react";

const StyledLabel = styled.label`
  display: block;
  width: 100%;
  box-sizing: border-box;
  margin: ${(props) => props.theme.spacings.xs};
`;
const StyledInput = styled.input`
  display: block;
  width: 100%;
  border-radius: ${(props) => props.theme.spacings.s};
  border: 1px solid;
  border-color: ${(props) => props.theme.colors.neutras.a};
  box-sizing: border-box;
  margin-top: ${(props) => props.theme.spacings.xs};
  background: ${(props) => props.theme.colors.branco};
  height: 40px;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
`;

export const InputText = ({ title }) => {
  return (
    <StyledLabel>
      {title}
      <StyledInput />
    </StyledLabel>
  );
};
