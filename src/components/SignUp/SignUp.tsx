import React from "react";
import { Container } from "react-bootstrap";

import { LoginHeader, LoginFooter, SignUpForm } from "~ui";

export const SignUp: React.FC = () => {
  return (
    <Container fluid>
      <LoginHeader />
      <SignUpForm />
      <LoginFooter />
    </Container>
  );
};
