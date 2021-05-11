import React, { useMemo } from "react";
import ReactModal from "react-modal";
import { Button, Form } from "react-bootstrap";
import styled from "styled-components/macro";
import { useTranslation } from "react-i18next";
import { BsXCircle } from "react-icons/bs";
import { Formik, ErrorMessage, FormikHelpers } from "formik";
import * as yup from "yup";

import { hasErrors } from "~src/utils/form";

const StyledButtonCreate = styled(Button)`
  width: 50%;
  margin: auto;
  margin-top: 5rem;
  font-weight: bold;
`;

const StyledButtonClose = styled.button`
  background-color: transparent;
  border: none;
  font-size: 1.5rem;
  color: red;
  margin-left: 97%;
`;

const StyledH2 = styled.h2`
  margin-left: 45%;
  margin-bottom: 5rem;
  color: grey;
`;

const StyledFormGroup = styled(Form.Group)`
  display: flex;
  margin: 2rem 3rem 0 3rem;
`;

const StyledFormLabel = styled(Form.Label)`
  width: 25%;
  margin: auto;
`;

const RedErrorMessage = styled(ErrorMessage)`
  color: red;
  margin-left: 3rem;
`;

interface CreateRoomValues {
  maxUsers: number;
  bid: number;
  date: string;
}

interface ModalContentProps {
  hideModal: () => void;
  loading: boolean;
  onSubmitForm: (
    // eslint-disable-next-line no-unused-vars
    date: string,
    // eslint-disable-next-line no-unused-vars
    bid: number,
    // eslint-disable-next-line no-unused-vars
    maxUsers: number,
    // eslint-disable-next-line no-unused-vars
    actions: FormikHelpers<CreateRoomValues>
  ) => Promise<void>;
}

export const ModalContent: React.FC<ModalContentProps> = ({ hideModal, onSubmitForm, loading }) => {
  const { t } = useTranslation();
  const initialValues: CreateRoomValues = { maxUsers: 0, bid: 0, date: "" };
  const validationsSchema = useMemo(
    () =>
      yup.object().shape({
        bid: yup
          .number()
          .required("Required")
          .positive()
          .test("Min", "Must be greater than 50", (val = 50) => val >= 50),
        maxUsers: yup.number().required("Required").positive().integer(),
        date: yup.string().required("Required"),
      }),
    []
  );

  return (
    <ReactModal isOpen ariaHideApp={false}>
      <StyledButtonClose onClick={hideModal}>
        <BsXCircle />
      </StyledButtonClose>
      <StyledH2>{t("CreateRoom")}</StyledH2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationsSchema}
        onSubmit={({ date, bid, maxUsers }, actions) => onSubmitForm(date, bid, maxUsers, actions)}
      >
        {({ values, handleSubmit, handleChange, handleBlur, errors }) => (
          <Form onSubmit={handleSubmit}>
            <StyledFormGroup controlId="bid">
              <StyledFormLabel>{t("Bid")}:</StyledFormLabel>
              <Form.Control
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.bid}
                type="number"
                autoComplete="on"
              />
            </StyledFormGroup>
            <RedErrorMessage component="span" name="bid" />
            <StyledFormGroup controlId="maxUsers">
              <StyledFormLabel>{t("MaxUsers")}:</StyledFormLabel>
              <Form.Control
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.maxUsers}
                type="number"
                autoComplete="on"
              />
            </StyledFormGroup>
            <RedErrorMessage component="span" name="maxUsers" />
            <StyledFormGroup controlId="date">
              <StyledFormLabel>{t("Date")}:</StyledFormLabel>
              <Form.Control
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.date}
                type="datetime-local"
                autoComplete="on"
              />
            </StyledFormGroup>
            <RedErrorMessage component="span" name="date" />
            <StyledButtonCreate
              variant="outline-success"
              size="lg"
              block
              type="submit"
              disabled={hasErrors(errors) || loading}
            >
              {t("CreateRoom")}
            </StyledButtonCreate>
          </Form>
        )}
      </Formik>
    </ReactModal>
  );
};
