import React from "react";
import { Nav, Row, Col, Image } from "react-bootstrap";
import styled from "styled-components/macro";

const StyledRow = styled(Row)`
  border-bottom: 1px solid grey;
`;

const StyledCol = styled(Col)`
  margin: 1rem;
`;

const LoginHeader: React.FC = () => {
  return (
    <StyledRow>
      <StyledCol md={10}>
        <Nav defaultActiveKey="/home" as="ul">
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
      </StyledCol>
      <Col>
        <Image src="#" rounded />
      </Col>
    </StyledRow>
  );
};

export default LoginHeader;
