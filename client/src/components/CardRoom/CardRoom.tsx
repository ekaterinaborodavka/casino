import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import styled from "styled-components/macro";
import { format } from "date-fns";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { DateFormatVariant } from "~src/types/types";

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

const StyledListGroupItemDate = styled(ListGroup.Item)`
  padding: 1.5rem;
  text-align: center;
  width: 40%;
`;
export interface CardRoomProps {
  id?: string;
  numberOfUsers: number;
  maxUsers: number;
  bid: number;
  date: Date | number;
  formatDate?: string;
}

export const CardRoom: React.FC<CardRoomProps> = ({
  id,
  numberOfUsers,
  maxUsers,
  bid,
  date,
  formatDate = DateFormatVariant.date,
}) => {
  const { t } = useTranslation();

  return (
    <StyledLink to={`/room/${id}`}>
      <StyledCard>
        <StyledListGroup>
          <StyledListGroupItem>
            {t("UsersInRoom", { joinedUsers: numberOfUsers, totalUsers: maxUsers })}
          </StyledListGroupItem>
          <StyledListGroupItem>{bid}</StyledListGroupItem>
          <StyledListGroupItemDate>{format(date, formatDate)}</StyledListGroupItemDate>
        </StyledListGroup>
      </StyledCard>
    </StyledLink>
  );
};
