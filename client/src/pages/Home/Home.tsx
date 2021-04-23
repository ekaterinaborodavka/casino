import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components/macro";

import { Header, Footer, RoomsList, UsersList } from "~components";

const StyledContainerWrapper = styled(Container)`
  margin-top: 3rem;
  display: flex;
  flex-direction: row;
`;

const StyledContainer = styled(Container)`
  width: 50%;
`;

// TODO: Delete mock date
const rooms = [{ numberOfUsers: 5, bid: 500, date: 1618815055, formatDate: "hh:mm:ss aa" }];
const users = [
  {
    userName: "UserName",
    userImg: "https://gloria-mur.ru/wp-content/uploads/2017/05/avatar1-1024x640.jpg",
  },
];

export const Home: React.FC = () => {
  return (
    <>
      <Header />
      <StyledContainerWrapper>
        <StyledContainer>
          <RoomsList rooms={rooms} />
        </StyledContainer>
        <StyledContainer>
          <UsersList users={users} />
        </StyledContainer>
      </StyledContainerWrapper>
      <Footer />
    </>
  );
};
