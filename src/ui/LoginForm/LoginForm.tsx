import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Formik, ErrorMessage } from "formik";
import styled from "styled-components/macro";
import * as yup from "yup";
import { useTranslation } from "react-i18next";

export interface LoginValues {
  email: string;
  password: string;
}

const StyledRow = styled(Row)`
  justify-content: center;
  margin-top: 10rem;
`;

const StyledFormGroupButton = styled(Form.Group)`
  display: flex;
  justify-content: space-between;
`;

const StyledButton = styled(Button)`
  margin: 1rem;
  width: 35%;
`;

const RedErrorMessage = styled(ErrorMessage)`
  color: red;
`;

export const LoginForm: React.FC = () => {
  const initialValues: LoginValues = { email: "", password: "" };
  const { t } = useTranslation();

  const validationsSchema = yup.object().shape({
    password: yup.string().min(5).required("Required"),
    email: yup.string().email("Please enter a valid email").required("Required"),
  });

  return (
    <StyledRow>
      <Col md={3}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationsSchema}
          onSubmit={(values, actions) => {
            actions.resetForm({
              values: { email: "", password: "" },
            });
          }}
        >
          {({ values, handleSubmit, handleChange, handleBlur, isSubmitting, errors }) => (
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="email">
                <Form.Control
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  type="email"
                  placeholder={t("EnterEmail")}
                  autoComplete="off"
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
                <StyledButton variant="link">{t("SignUp")}</StyledButton>
                <StyledButton
                  variant="outline-dark"
                  type="submit"
                  disabled={Object.keys(errors).length || isSubmitting}
                >
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
