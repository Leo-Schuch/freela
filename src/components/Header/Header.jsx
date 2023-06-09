import React from "react";
import styled from "@emotion/styled";

const StyledHeader = styled.header`
  background: ${(props) => props.theme.colors.primarias.a};
  padding: ${(props) => props.theme.spacings.m};
`;

export const Header = ({ children }) => {
  return <StyledHeader>{children}</StyledHeader>;
};
