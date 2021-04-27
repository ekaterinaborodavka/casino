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
  max-width: 100px;
  height: 90px;
`;

const StyledCardTitle = styled(Card.Title)`
  text-align: center;
`;

export interface CardUserProps {
  name: string;
  img: string;
}

export const CardUser: React.FC<CardUserProps> = ({ img, name }) => {
  return (
    <StyledCard>
      <StyledCardImg variant="top" src={img} />
      <StyledCardBody>
        <StyledCardTitle>{name}</StyledCardTitle>
      </StyledCardBody>
    </StyledCard>
  );
};
