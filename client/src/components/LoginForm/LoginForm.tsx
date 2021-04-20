import React, { useMemo } from "react";
import { Form, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as yup from "yup";
import { useTranslation } from "react-i18next";
import styled from "styled-components/macro";
import { useQuery } from "@apollo/client";
import { useHistory } from "react-router-dom";

import { StyledRow, RedErrorMessage } from "~ui/StyledComponents";
import { GET_LOGIN } from "~src/query/login";
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

export const LoginForm: React.FC = () => {
  const initialValues: LoginValues = { email: "", password: "" };
  const { t } = useTranslation();
  const { data } = useQuery(GET_LOGIN);
  const history = useHistory();
  const validationsSchema = useMemo(
    () =>
      yup.object().shape({
        password: yup.string().min(5).required("Required"),
        email: yup.string().email("Please enter a valid email").required("Required"),
      }),
    []
  );

  const hasErrors = (errors: { email?: string; password?: string }) => {
    return Object.keys(errors).length;
  };

  return (
    <StyledRow>
      <Col md={3}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationsSchema}
          onSubmit={({ email, password }, actions) => {
            if (email === data.getLogin.email && password === data.getLogin.password) {
              history.push("/");
              actions.resetForm({
                values: { email: "", password: "" },
              });
              return;
            }
            actions.setFieldError("email", "Password or email is incorrect");
            actions.setFieldError("password", "Password or email is incorrect");
          }}
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
                <StyledButton variant="outline-dark" type="submit" disabled={hasErrors(errors)}>
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
