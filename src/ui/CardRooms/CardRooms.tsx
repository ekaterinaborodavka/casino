import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import styled from "styled-components/macro";

const StyledCard = styled(Card)`
  margin: 1rem auto;
  max-width: 60%;
`;

const StyledListGroup = styled(ListGroup)`
  flex-direction: row;
  justify-content: space-around;
`;

const StyledListGroupItem = styled(ListGroup.Item)`
  padding: 1rem;
  text-align: center;
  width: 25%;
`;

export const CardRooms: React.FC = () => {
  return (
    <StyledCard>
      <StyledListGroup>
        <StyledListGroupItem>5/10 users</StyledListGroupItem>
        <StyledListGroupItem>50/100</StyledListGroupItem>
        <StyledListGroupItem>time: 5:00</StyledListGroupItem>
      </StyledListGroup>
    </StyledCard>
  );
};
