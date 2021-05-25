import React from "react";
import { useQuery } from "@apollo/client";
import { Spinner } from "react-bootstrap";
import styled from "styled-components/macro";

import { Header, Footer, UsersList, RoomsList, NoUsers, ModalAddRoom } from "~components";
import { StyledContainerWrapper, StyledContainer } from "~ui/StyledComponents";
import { GET_ROOMS, GET_USERS } from "~src/query";
import { Rooms } from "~src/types/Rooms";
import { Users } from "~src/types/Users";

const StyledSpinner = styled(Spinner)`
  margin-left: 50%;
`;

export const Home: React.FC = () => {
  const { data: roomsData, loading: roomsLoading } = useQuery<Rooms>(GET_ROOMS);
  const { data: usersData, loading: usersLoading } = useQuery<Users>(GET_USERS);

  return (
    <>
      <Header />
      <ModalAddRoom />
      <StyledContainerWrapper>
        <StyledContainer>
          {roomsLoading ? <StyledSpinner animation="border" /> : <RoomsList rooms={roomsData?.rooms || []} />}
        </StyledContainer>
        <StyledContainer>
          {usersLoading ? (
            <StyledSpinner animation="border" />
          ) : usersData?.users.length === 0 ? (
            <NoUsers />
          ) : (
            <UsersList users={usersData?.users || []} />
          )}
        </StyledContainer>
      </StyledContainerWrapper>
      <Footer />
    </>
  );
};
