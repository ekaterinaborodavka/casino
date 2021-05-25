import React from "react";
import { Container } from "react-bootstrap";

import { Header, Footer, SignUpForm } from "~components";

export const SignUp: React.FC = () => {
  return (
    <Container fluid>
      <Header />
      <SignUpForm />
      <Footer />
    </Container>
  );
};
