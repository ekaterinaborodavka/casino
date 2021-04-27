import React from "react";
import { useQuery } from "@apollo/client";
import { Spinner } from "react-bootstrap";
import styled from "styled-components/macro";

import { Header, Footer, UsersList, RoomsList, NoUsers } from "~components";
import { StyledContainerWrapper, StyledContainer } from "~ui/StyledComponents";
import { GET_ROOMS, GET_USERS } from "~src/query";

const StyledSpinner = styled(Spinner)`
  margin-left: 50%;
`;

export const Home: React.FC = () => {
  const { data: roomsData, loading: roomsLoading } = useQuery(GET_ROOMS);
  const { data: usersData, loading: usersLoading } = useQuery(GET_USERS);

  return (
    <>
      <Header />
      <StyledContainerWrapper>
        <StyledContainer>
          {roomsLoading ? <StyledSpinner animation="border" /> : <RoomsList rooms={roomsData.getRooms} />}
        </StyledContainer>
        <StyledContainer>
          {usersLoading ? (
            <StyledSpinner animation="border" />
          ) : usersData.getUsers.length === 0 ? (
            <NoUsers />
          ) : (
            <UsersList users={usersData.getUsers} />
          )}
        </StyledContainer>
      </StyledContainerWrapper>
      <Footer />
    </>
  );
};
