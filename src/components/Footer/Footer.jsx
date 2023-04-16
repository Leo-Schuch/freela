import styled from "@emotion/styled";

const StyledFooter = styled.footer`
  background: ${(props) => props.theme.colors.primarias.a};
  padding: ${(props) => props.theme.spacings.xl};
  color: ${(props) => props.theme.colors.branco};
  
  
`;

export const Footer = ({ children }) => {
  return <StyledFooter>{children}</StyledFooter>;
};
