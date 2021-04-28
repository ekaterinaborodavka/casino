import React from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import styled from "styled-components/macro";
import { useRouteMatch } from "react-router";
import { useQuery } from "@apollo/client";
import { format } from "date-fns";
import { useTranslation } from "react-i18next";

import { Header, Footer, UsersList, NoUsers } from "~components";
import { StyledContainerWrapper, StyledContainer } from "~ui/StyledComponents";
import { GET_ONE_ROOM } from "~src/query";
import { DateFormatVariant } from "~src/types/types";

const StyledContainerRoomContent = styled(Container)`
  width: 50%;
  text-align: center;
`;

const StyledColTitle = styled(Col)`
  font-weight: bold;
  text-align: left;
`;

const StyledCol = styled(Col)`
  text-align: left;
`;

const StyledRow = styled(Row)`
  font-size: 1.2rem;
  padding: 0.5rem;
  border-bottom: 1px solid dimgray;
  width: 80%;
  color: dimgray;
`;

export const Room: React.FC = () => {
  const { t } = useTranslation();
  const { params } = useRouteMatch<{ id: string }>();
  const { data, loading } = useQuery(GET_ONE_ROOM, {
    variables: {
      id: params.id,
    },
  });

  return (
    <>
      <Header />
      <StyledContainerWrapper>
        {loading ? (
          <Spinner animation="border" />
        ) : (
          <>
            <StyledContainerRoomContent>
              <StyledRow>
                <StyledColTitle>{t("Users")}:</StyledColTitle>
                <StyledCol>{data.oneRoom.numberOfUsers}</StyledCol>
              </StyledRow>
              <StyledRow>
                <StyledColTitle>{t("Bid")}:</StyledColTitle>
                <StyledCol>{data.oneRoom.bid}</StyledCol>
              </StyledRow>
              <StyledRow>
                <StyledColTitle>{t("Date")}:</StyledColTitle>
                <StyledCol>{format(data.oneRoom.date, DateFormatVariant.time)}</StyledCol>
              </StyledRow>
            </StyledContainerRoomContent>
            <StyledContainer>
              {!data.oneRoom.users[0] ? <NoUsers /> : <UsersList users={data.oneRoom.users} />}
            </StyledContainer>
          </>
        )}
      </StyledContainerWrapper>
      <Footer />
    </>
  );
};
