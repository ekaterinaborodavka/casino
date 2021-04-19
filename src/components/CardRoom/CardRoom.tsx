import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import styled from "styled-components/macro";
import { format } from "date-fns";
import { useTranslation } from "react-i18next";

const StyledCard = styled(Card)`
  margin: 1.5rem auto;
  max-width: 90%;
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
  numberOfUsers: number;
  bid: number;
  date: Date | number;
  formatDate: string;
}

export enum DateFormatVariant {
  // eslint-disable-next-line no-unused-vars
  time = "hh:mm:ss aa",
  // eslint-disable-next-line no-unused-vars
  fullDate = "dd-MM-yyyy hh:mm:ss aa",
}

export const CardRoom: React.FC<CardRoomProps> = ({
  numberOfUsers,
  bid,
  date,
  formatDate = DateFormatVariant.time,
}) => {
  const { t } = useTranslation();
  return (
    <StyledCard>
      <StyledListGroup>
        <StyledListGroupItem>{t("UsersInRoom", { joinedUsers: numberOfUsers, totalUsers: 10 })}</StyledListGroupItem>
        <StyledListGroupItem>{bid}</StyledListGroupItem>
        <StyledListGroupItem>{format(date, formatDate)}</StyledListGroupItem>
      </StyledListGroup>
    </StyledCard>
  );
};
