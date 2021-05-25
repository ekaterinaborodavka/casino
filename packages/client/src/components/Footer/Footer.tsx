import React from "react";
import { Nav, Container } from "react-bootstrap";
import styled from "styled-components/macro";

const StyledContainer = styled(Container)`
  position: fixed;
  height: 100px;
  bottom: 0;
  padding-bottom: 2rem;
  background: white;
`;

export const Footer: React.FC = () => {
  return (
    <StyledContainer fluid>
      <Nav className="justify-content-center" as="ul">
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
    </StyledContainer>
  );
};
