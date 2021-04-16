import React from "react";
import { Card } from "react-bootstrap";
import styled from "styled-components/macro";

const StyledCard = styled(Card)`
  margin: 1rem auto;
  max-width: 60%;
  flex-direction: row;
`;

const StyledCardBody = styled(Card.Body)`
  max-width: 70%;
  margin: auto;
`;

const StyledCardImg = styled(Card.Img)`
  margin: 0.5rem;
  max-width: 20%;
`;

const StyledCardTitle = styled(Card.Title)`
  text-align: center;
`;

export const CardUsers: React.FC = () => {
  return (
    <StyledCard>
      <StyledCardImg variant="top" src="https://gloria-mur.ru/wp-content/uploads/2017/05/avatar1-1024x640.jpg " />
      <StyledCardBody>
        <StyledCardTitle>UserName</StyledCardTitle>
      </StyledCardBody>
    </StyledCard>
  );
};
