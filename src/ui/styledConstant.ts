import { Row } from "react-bootstrap";
import { ErrorMessage } from "formik";
import styled from "styled-components/macro";

export const StyledRow = styled(Row)`
  justify-content: center;
  margin-top: 10rem;
`;

export const RedErrorMessage = styled(ErrorMessage)`
  color: red;
`;
