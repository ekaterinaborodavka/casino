import React from "react";
import { Card } from "react-bootstrap";
import styled from "styled-components/macro";

const StyledCard = styled(Card)`
  margin: 1.5rem auto;
  max-width: 90%;
  flex-direction: row;
`;

const StyledCardBody = styled(Card.Body)`
  max-width: 70%;
  margin: auto;
`;

const StyledCardImg = styled(Card.Img)`
  margin: 0.5rem;
  max-width: 120px;
  max-height: 120px;
`;

const StyledCardTitle = styled(Card.Title)`
  text-align: center;
`;

export interface CardUserProps {
  userName: string;
  userImg: string;
}

export const CardUser: React.FC<CardUserProps> = ({ userImg, userName }) => {
  return (
    <StyledCard>
      <StyledCardImg variant="top" src={userImg} />
      <StyledCardBody>
        <StyledCardTitle>{userName}</StyledCardTitle>
      </StyledCardBody>
    </StyledCard>
  );
};
