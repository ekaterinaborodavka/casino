import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import styled from "styled-components/macro";
import { format } from "date-fns";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const StyledCard = styled(Card)`
  margin: 1.5rem auto;
  max-width: 90%;
`;
const StyledLink = styled(Link)`
  color: black;
  &:hover {
    text-decoration: none;
    color: black;
  }
`;

const StyledListGroup = styled(ListGroup)`
  flex-direction: row;
  justify-content: space-around;
`;

const StyledListGroupItem = styled(ListGroup.Item)`
  padding: 1.5rem;
  text-align: center;
  width: 30%;
`;
export interface CardRoomProps {
  id?: string;
  numberOfUsers: number;
  bid: number;
  date: Date | number;
  formatDate?: string;
}

export const CardRoom: React.FC<CardRoomProps> = ({ id, numberOfUsers, bid, date, formatDate = "hh:mm:ss aa" }) => {
  const { t } = useTranslation();

  return (
    <StyledLink to={`/room/${id}`}>
      <StyledCard>
        <StyledListGroup>
          <StyledListGroupItem>{t("UsersInRoom", { joinedUsers: numberOfUsers, totalUsers: 10 })}</StyledListGroupItem>
          <StyledListGroupItem>{bid}</StyledListGroupItem>
          <StyledListGroupItem>{format(date, formatDate)}</StyledListGroupItem>
        </StyledListGroup>
      </StyledCard>
    </StyledLink>
  );
};
