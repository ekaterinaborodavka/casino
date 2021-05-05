import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import styled from "styled-components/macro";

const StyledButton = styled(Button)`
  margin-top: 1rem;
`;

export const LogOut: React.FC = () => {
  const { t } = useTranslation();
  const history = useHistory();

  const logOut = useCallback(() => {
    localStorage.removeItem("token");
    history.push("/");
  }, [history]);

  return (
    <StyledButton onClick={logOut} variant="dark">
      {t("LogOut")}
    </StyledButton>
  );
};
