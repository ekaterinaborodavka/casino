import React from "react";

import { CardRoom, CardRoomProps } from "~components";

export interface RoomsListProps {
  rooms: CardRoomProps[];
}

export const RoomsList: React.FC<RoomsListProps> = ({ rooms }) => {
  return (
    <>
      {rooms.map((room, index) => (
        <CardRoom key={index} {...room} />
      ))}
    </>
  );
};
