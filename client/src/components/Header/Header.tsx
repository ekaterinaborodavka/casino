import React from "react";
import { Nav, Row, Col, Image } from "react-bootstrap";
import styled from "styled-components/macro";

import { LogOut } from "~components";
import { getIsLoggedIn } from "~src/utils/auth";

const StyledRow = styled(Row)`
  border-bottom: 1px solid grey;
`;

const StyledCol = styled(Col)`
  margin: 1rem;
`;

export const Header: React.FC = () => {
  return (
    <StyledRow>
      <StyledCol md={9}>
        <Nav as="ul">
          <Nav.Item as="li">
            <Nav.Link>Link1</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link>Link2</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link>Link3</Nav.Link>
          </Nav.Item>
        </Nav>
      </StyledCol>
      <Col>
        {/* TODO: add src */}
        <Image src="#" rounded />
      </Col>
      {getIsLoggedIn() ? (
        <Col>
          <LogOut />
        </Col>
      ) : null}
    </StyledRow>
  );
};
