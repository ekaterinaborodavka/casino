import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components/macro";

import { Header, Footer } from "~components";
import { CardRooms, CardUsers } from "~ui";

const StyledContainerWrapper = styled(Container)`
  margin-top: 3rem;
  display: flex;
  flex-direction: row;
`;

export const Home: React.FC = () => {
  return (
    <>
      <Header />
      <StyledContainerWrapper>
        <Container>
          <CardRooms />
          <CardRooms />
        </Container>
        <Container>
          <CardUsers />
          <CardUsers />
        </Container>
      </StyledContainerWrapper>
      <Footer />
    </>
  );
};
