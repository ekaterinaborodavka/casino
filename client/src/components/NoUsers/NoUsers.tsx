import React from "react";
import { Row } from "react-bootstrap";
import styled from "styled-components/macro";
import { useTranslation } from "react-i18next";

export const StyledRowNoUsers = styled(Row)`
  margin-left: 50%;
  margin-top: 2rem;
  font-size: 1.5rem;
`;

export const NoUsers: React.FC = () => {
  const { t } = useTranslation();

  return <StyledRowNoUsers>{t("NoUsers")}...</StyledRowNoUsers>;
};
