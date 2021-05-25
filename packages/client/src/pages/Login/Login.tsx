import React from "react";
import { Container } from "react-bootstrap";

import { Header, Footer, LoginForm } from "~components";

export const Login: React.FC = () => {
  return (
    <Container fluid>
      <Header />
      <LoginForm />
      <Footer />
    </Container>
  );
};
