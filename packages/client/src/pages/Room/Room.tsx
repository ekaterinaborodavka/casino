import React, { useState } from "react";
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
import { OneRoom } from "~src/types/OneRoom";
import { Animation } from "react-animation-pack";

const StyledContainerRoomContent = styled(Container)`
  width: 50%;
  text-align: center;
`;

const StyledAnimationRow = styled(Row)`
  width: 40%;
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
  const { data, loading } = useQuery<OneRoom>(GET_ONE_ROOM, {
    variables: {
      id: params.id,
    },
  });
  const [winner, setWinner] = useState("");

  // TODO: delete setTimeout
  setTimeout(() => {
    setWinner("WinnerUser");
  }, 2000);

  return (
    <>
      <Header />
      <StyledContainerWrapper>
        {loading ? (
          <Spinner animation="border" />
        ) : (
          <>
            <StyledContainerRoomContent>
              <StyledAnimationRow>
                {winner ? <Animation type="winner" playing={true} winner={winner} /> : null}
              </StyledAnimationRow>
              <StyledRow>
                <StyledColTitle>{t("Users")}:</StyledColTitle>
                <StyledCol>{data?.oneRoom.numberOfUsers}</StyledCol>
              </StyledRow>
              <StyledRow>
                <StyledColTitle>{t("Bid")}:</StyledColTitle>
                <StyledCol>{data?.oneRoom.bid}</StyledCol>
              </StyledRow>
              <StyledRow>
                <StyledColTitle>{t("Date")}:</StyledColTitle>
                <StyledCol>{format(data?.oneRoom.date || Date.now() / 1000, DateFormatVariant.time)}</StyledCol>
              </StyledRow>
            </StyledContainerRoomContent>
            <StyledContainer>
              {!data?.oneRoom.users[0] ? <NoUsers /> : <UsersList users={data?.oneRoom.users || []} />}
            </StyledContainer>
          </>
        )}
      </StyledContainerWrapper>
      <Footer />
    </>
  );
};
