import { Row, Container } from "react-bootstrap";
import { ErrorMessage } from "formik";
import styled from "styled-components/macro";

export const StyledRow = styled(Row)`
  justify-content: center;
  margin-top: 10rem;
`;

export const RedErrorMessage = styled(ErrorMessage)`
  color: red;
`;

export const StyledContainerWrapper = styled(Container)`
  margin-top: 3rem;
  display: flex;
  flex-direction: row;
`;

export const StyledContainer = styled(Container)`
  width: 50%;
`;
