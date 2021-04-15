import React from "react";
import { Form, Col, Button } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";
import { useTranslation } from "react-i18next";
import styled from "styled-components/macro";

import { StyledRow, RedErrorMessage } from "~ui/styledConstant";

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

  const validationsSchema = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required("Required"),
    password: yup.string().min(5).required("Required"),
    confirmPassword: yup.string().oneOf([yup.ref("password")], "Password mismatch"),
  });

  return (
    <StyledRow>
      <Col md={3}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationsSchema}
          onSubmit={(values, actions) => {
            console.log(values);
            actions.resetForm({
              values: { email: "", password: "", confirmPassword: "" },
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
                disabled={Object.keys(errors).length || isSubmitting}
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
