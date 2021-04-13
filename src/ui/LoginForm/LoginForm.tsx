import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Formik } from "formik";
import styled from "styled-components/macro";

import { FormikValues } from "~src/types";

const StyledRow = styled(Row)`
  justify-content: center;
  margin-top: 10rem;
`;

const StyledFormGroupButton = styled(Form.Group)`
  display: flex;
  justify-content: space-between;
`;

const StyledFormGroupInput = styled(Form.Group)`
  margin-bottom: 3rem;
`;

const StyledButton = styled(Button)`
  margin: 1rem;
  width: 35%;
`;

const StyledFormText = styled(Form.Text)`
  color: red;
`;

const LoginForm: React.FC = () => {
  const initialValues: FormikValues = { email: "", password: "" };
  return (
    <StyledRow>
      <Col md={3}>
        <Formik
          initialValues={initialValues}
          validate={(values) => {
            const errors: { password?: string; email?: string } = {};
            if (!values.email || !values.password) {
              !values.email ? (errors.email = "Required") : (errors.password = "Required");
            } else if (values.password.length < 5) {
              errors.password = "Password must be more than 5 characters";
            }
            return errors;
          }}
          onSubmit={(values, actions) => {
            actions.resetForm({
              values: { email: "", password: "" },
            });
          }}
        >
          {({ values, handleSubmit, handleChange, handleBlur, isSubmitting, errors, touched }) => (
            <Form onSubmit={handleSubmit}>
              <StyledFormGroupInput controlId="email">
                <Form.Control
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  type="email"
                  placeholder="Enter email"
                  autoComplete="user"
                />
                {touched.email && errors.email && <StyledFormText>{errors.email}</StyledFormText>}
              </StyledFormGroupInput>
              <StyledFormGroupInput controlId="password">
                <Form.Control
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                />
                {touched.password && errors.password && <StyledFormText>{errors.password}</StyledFormText>}
              </StyledFormGroupInput>
              <StyledFormGroupButton>
                <StyledButton variant="link">Sign up</StyledButton>
                <StyledButton
                  variant="outline-dark"
                  type="submit"
                  disabled={
                    values.password == "" || values.email == "" || errors.email || errors.password || isSubmitting
                  }
                >
                  Sign in
                </StyledButton>
              </StyledFormGroupButton>
            </Form>
          )}
        </Formik>
      </Col>
    </StyledRow>
  );
};

export default LoginForm;
