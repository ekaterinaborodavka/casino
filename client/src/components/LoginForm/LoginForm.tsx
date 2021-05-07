import React, { useMemo, useCallback } from "react";
import { Form, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as yup from "yup";
import { useTranslation } from "react-i18next";
import styled from "styled-components/macro";
import { useMutation } from "@apollo/client";
import { useHistory } from "react-router-dom";

import { StyledRow, RedErrorMessage } from "~ui/StyledComponents";
import { LOGIN } from "~src/mutations";
import { setIsLoggedIn } from "~src/utils/auth";
import { Login, LoginVariables } from "~src/types/Login";
import { hasErrors } from "~src/utils/form";
interface LoginValues {
  email: string;
  password: string;
}

const StyledFormGroupButton = styled(Form.Group)`
  display: flex;
  justify-content: space-between;
`;

const StyledButton = styled(Button)`
  margin: 1rem;
  width: 35%;
`;

const StyledLink = styled(Link)`
  margin: 1rem;
  width: 35%;
  padding-top: 0.5rem;
  text-align: center;
`;

const INITIAL_VALUES: LoginValues = { email: "", password: "" };

export const LoginForm: React.FC = () => {
  const { t } = useTranslation();
  const [autentification, { loading }] = useMutation<Login, LoginVariables>(LOGIN);
  const history = useHistory();
  const validationsSchema = useMemo(
    () =>
      yup.object().shape({
        password: yup.string().min(5).required("Required"),
        email: yup.string().email("Please enter a valid email").required("Required"),
      }),
    []
  );

  const onSubmitForm = useCallback(
    async (email, password, actions) => {
      try {
        const response = await autentification({
          variables: {
            email,
            password,
          },
        });
        if (response.data) {
          setIsLoggedIn(response.data.login);
          history.push("/");
        }
        return;
      } catch (e) {
        actions.setFieldError("password", e.message);
      }
    },
    [autentification, history]
  );

  return (
    <StyledRow>
      <Col md={3}>
        <Formik
          initialValues={INITIAL_VALUES}
          validationSchema={validationsSchema}
          onSubmit={({ email, password }, actions) => onSubmitForm(email, password, actions)}
        >
          {({ values, handleSubmit, handleChange, handleBlur, errors }) => (
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="email">
                <Form.Control
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  type="email"
                  placeholder={t("Email")}
                  autoComplete="on"
                />
                <RedErrorMessage component="span" name="email" />
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Control
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  type="password"
                  placeholder={t("Password")}
                  autoComplete="current-password"
                />
                <RedErrorMessage component="span" name="password" />
              </Form.Group>
              <StyledFormGroupButton>
                <StyledLink to="/signup">{t("SignUp")}</StyledLink>
                <StyledButton variant="outline-dark" type="submit" disabled={hasErrors(errors) || loading}>
                  {t("SignIn")}
                </StyledButton>
              </StyledFormGroupButton>
            </Form>
          )}
        </Formik>
      </Col>
    </StyledRow>
  );
};
