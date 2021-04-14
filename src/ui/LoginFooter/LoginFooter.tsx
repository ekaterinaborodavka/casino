import React from "react";
import { Nav, Container } from "react-bootstrap";
import styled from "styled-components/macro";

const StyledContainer = styled(Container)`
  position: fixed;
  bottom: 0;
  margin-bottom: 2rem;
`;

export const LoginFooter: React.FC = () => {
  return (
    <StyledContainer fluid>
      <Nav className="justify-content-center" defaultActiveKey="/home" as="ul">
        <Nav.Item as="li">
          <Nav.Link eventKey="link-1">Link1</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-2">Link2</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-3">Link3</Nav.Link>
        </Nav.Item>
      </Nav>
    </StyledContainer>
  );
};
