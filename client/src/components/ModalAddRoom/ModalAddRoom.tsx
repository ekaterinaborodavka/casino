import React, { useMemo, useCallback } from "react";
import ReactModal from "react-modal";
import { useModal } from "react-modal-hook";
import { Button, Form } from "react-bootstrap";
import styled from "styled-components/macro";
import { useTranslation } from "react-i18next";
import { BsXCircle } from "react-icons/bs";
import { Formik, ErrorMessage } from "formik";
import { useMutation } from "@apollo/client";
import * as yup from "yup";

import { dateToTimestamp } from "~src/utils/date";
import { hasErrors } from "~src/utils/form";
import { CREATE_ROOM } from "~src/mutations";
import { GET_ROOMS } from "~src/query";
import { CreateRoom, CreateRoomVariables } from "~src/types/CreateRoom";
import { Rooms } from "~src/types/Rooms";

const StyledButton = styled(Button)`
  margin-left: 45%;
  margin-top: 1rem;
`;

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

export const ModalAddRoom: React.FC = () => {
  const { t } = useTranslation();
  const [createRoom, { loading }] = useMutation<CreateRoom, CreateRoomVariables>(CREATE_ROOM, {
    update(cache, { data }) {
      const newRoom = data?.createRoom;
      const existingRooms = cache.readQuery<Rooms>({
        query: GET_ROOMS,
      });
      cache.writeQuery({
        query: GET_ROOMS,
        data: {
          rooms: [...(existingRooms?.rooms || []), newRoom],
        },
      });
    },
  });
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

  const onSubmitForm = useCallback(
    async (date, bid, maxUsers, actions) => {
      try {
        const timestamp = dateToTimestamp(date);
        await createRoom({
          variables: {
            date: timestamp,
            bid,
            maxUsers,
          },
        });
        actions.resetForm({
          maxUsers: 0,
          bid: 0,
          date: "",
        });
        return;
      } catch (e) {
        actions.setFieldError("date", e.message);
      }
    },
    [createRoom]
  );

  const [showModal, hideModal] = useModal(() => (
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
  ));

  return (
    <StyledButton variant="outline-success" onClick={showModal}>
      {t("AddRoom")}
    </StyledButton>
  );
};
