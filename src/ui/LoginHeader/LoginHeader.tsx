import React from "react";
import { Nav, Row, Col, Image } from "react-bootstrap";
import styled, { css } from "styled-components/macro";

import { LoginHeaderProps, Sizes } from "~src/types";

const loginHeaderMarginMapping = {
  [Sizes.large]: css`
    margin-right: 2rem;
  `,
  [Sizes.medium]: css`
    margin-right: 1rem;
  `,
  [Sizes.small]: css`
    margin-right: 0.1rem;
  `,
};

const StyledRow = styled(Row)`
  border-bottom: 1px solid grey;
`;

const StyledCol = styled(Col)`
  margin: 1rem;
`;

const StyledNavItem = styled(Nav.Item)<LoginHeaderProps>`
  ${({ marginRight = Sizes.medium }) => {
    return loginHeaderMarginMapping[marginRight];
  }}
`;

const LoginHeader: React.FC<LoginHeaderProps> = ({ marginRight }) => {
  return (
    <StyledRow>
      <StyledCol md={10}>
        <Nav defaultActiveKey="/home" as="ul">
          <StyledNavItem marginRight={marginRight} as="li">
            <Nav.Link eventKey="link-1">Link1</Nav.Link>
          </StyledNavItem>
          <StyledNavItem marginRight={marginRight} as="li">
            <Nav.Link eventKey="link-2">Link2</Nav.Link>
          </StyledNavItem>
          <StyledNavItem marginRight={marginRight} as="li">
            <Nav.Link eventKey="link-3">Link3</Nav.Link>
          </StyledNavItem>
        </Nav>
      </StyledCol>
      <Col>
        <Image src="#" rounded />
      </Col>
    </StyledRow>
  );
};

export default LoginHeader;
