import React from "react";

import { CardRoom, CardRoomProps } from "~components";

export interface RoomsProps {
  rooms: CardRoomProps[];
}

export const Rooms: React.FC<RoomsProps> = ({ rooms }) => {
  return (
    <>
      {rooms.map((room, index) => (
        <CardRoom key={index} {...room} />
      ))}
    </>
  );
};
