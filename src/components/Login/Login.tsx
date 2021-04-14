import React from "react";
import { Container } from "react-bootstrap";

import { LoginHeader } from "~ui";
import { LoginFooter } from "~ui";
import { LoginForm } from "~ui";

export const Login: React.FC = () => {
  return (
    <Container fluid>
      <LoginHeader />
      <LoginForm />
      <LoginFooter />
    </Container>
  );
};
