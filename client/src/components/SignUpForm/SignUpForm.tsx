import React, { useMemo, useCallback } from "react";
import { Form, Col, Button } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";
import { useTranslation } from "react-i18next";
import styled from "styled-components/macro";
import { useMutation } from "@apollo/client";
import { useHistory } from "react-router-dom";

import { StyledRow, RedErrorMessage } from "~ui/StyledComponents";
import { SIGNUP } from "~src/mutations";
import { setIsLoggedIn } from "~src/utils/auth";
import { Signup, SignupVariables } from "~src/types/Signup";

interface SignUpValues {
  email: string;
  password: string;
  confirmPassword: string;
}

const StyledButton = styled(Button)`
  padding: 0.2rem;
  margin-top: 2.5rem;
`;

export const SignUpForm: React.FC = () => {
  const initialValues: SignUpValues = { email: "", password: "", confirmPassword: "" };
  const { t } = useTranslation();
  const [autentification, { loading }] = useMutation<Signup, SignupVariables>(SIGNUP);
  const history = useHistory();

  const validationsSchema = useMemo(
    () =>
      yup.object().shape({
        email: yup.string().email("Please enter a valid email").required("Required"),
        password: yup.string().min(5).required("Required"),
        confirmPassword: yup.string().oneOf([yup.ref("password")], "Password mismatch"),
      }),
    []
  );

  const hasErrors = useCallback((errors: { email?: string; password?: string; confirmPassword?: string }) => {
    return Object.keys(errors).length;
  }, []);

  const onSubmitForm = useCallback(
    async (email, password, confirmPassword, actions) => {
      try {
        const response = await autentification({
          variables: {
            email,
            password,
            confirmPassword,
          },
        });
        if (response.data) {
          setIsLoggedIn(response.data.signup);
          history.push("/");
        }
        return;
      } catch (e) {
        actions.setFieldError("confirmPassword", e.message);
      }
    },
    [autentification, history]
  );

  return (
    <StyledRow>
      <Col md={3}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationsSchema}
          onSubmit={({ email, password, confirmPassword }, actions) => {
            onSubmitForm(email, password, confirmPassword, actions);
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
              <Form.Group controlId="confirmPassword">
                <Form.Control
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.confirmPassword}
                  type="password"
                  placeholder={t("ConfirmPassword")}
                  autoComplete="current-password"
                />
                <RedErrorMessage component="span" name="confirmPassword" />
              </Form.Group>
              <StyledButton
                variant="outline-primary"
                size="lg"
                block
                type="submit"
                disabled={hasErrors(errors) || loading}
              >
                {t("SignUp")}
              </StyledButton>
            </Form>
          )}
        </Formik>
      </Col>
    </StyledRow>
  );
};
