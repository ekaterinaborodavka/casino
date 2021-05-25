import React, { useCallback } from "react";
import { useModal } from "react-modal-hook";
import { Button } from "react-bootstrap";
import styled from "styled-components/macro";
import { useTranslation } from "react-i18next";
import { useMutation } from "@apollo/client";

import { dateToTimestamp } from "~src/utils/date";
import { CREATE_ROOM } from "~src/mutations";
import { GET_ROOMS } from "~src/query";
import { CreateRoom, CreateRoomVariables } from "~src/types/CreateRoom";
import { Rooms } from "~src/types/Rooms";
import { ModalContent } from "~components";

const StyledButton = styled(Button)`
  margin-left: 45%;
  margin-top: 1rem;
`;

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

  const [showModal, hideModal] = useModal(
    () => <ModalContent hideModal={hideModal} onSubmitForm={onSubmitForm} loading={loading} />,
    []
  );

  return (
    <StyledButton variant="outline-success" onClick={showModal}>
      {t("AddRoom")}
    </StyledButton>
  );
};
