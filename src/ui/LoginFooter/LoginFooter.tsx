import React from "react";
import { Nav, Container } from "react-bootstrap";
import styled, { css } from "styled-components/macro";

import { LoginFooterProps, Sizes, FooterLinksColors } from "~src/types";

const loginFooterMarginMapping = {
  [Sizes.large]: css`
    margin: 1rem;
  `,
  [Sizes.medium]: css`
    margin: 0.5rem;
  `,
  [Sizes.small]: css`
    margin: 0.1rem;
  `,
};

const linksColorsMapping = {
  [FooterLinksColors.success]: css`
    color: #28a745;
  `,
  [FooterLinksColors.primary]: css`
    color: #007bff;
  `,
  [FooterLinksColors.gray]: css`
    color: #6c757d;
  `,
};

const StyledContainer = styled(Container)`
  position: fixed;
  bottom: 0;
  margin-bottom: 2rem;
`;

const StyledNavItem = styled(Nav.Item)<LoginFooterProps>`
  ${({ margin = Sizes.medium }) => {
    return loginFooterMarginMapping[margin];
  }}
`;

const StyledNavLink = styled(Nav.Link)<LoginFooterProps>`
  ${({ color = FooterLinksColors.primary }) => {
    return linksColorsMapping[color];
  }}
`;

const LoginFooter: React.FC<LoginFooterProps> = ({ margin, color }) => {
  return (
    <StyledContainer fluid>
      <Nav className="justify-content-center" defaultActiveKey="/home" as="ul">
        <StyledNavItem margin={margin} as="li">
          <StyledNavLink color={color} eventKey="link-1">
            Link1
          </StyledNavLink>
        </StyledNavItem>
        <StyledNavItem margin={margin} as="li">
          <StyledNavLink color={color} eventKey="link-2">
            Link2
          </StyledNavLink>
        </StyledNavItem>
        <StyledNavItem margin={margin} as="li">
          <StyledNavLink color={color} eventKey="link-3">
            Link3
          </StyledNavLink>
        </StyledNavItem>
      </Nav>
    </StyledContainer>
  );
};

export default LoginFooter;
