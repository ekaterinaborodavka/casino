import React, { useCallback } from "react";

import { CardRoom, CardRoomProps } from "~components";

export interface RoomsListProps {
  rooms: CardRoomProps[];
}

export const RoomsList: React.FC<RoomsListProps> = ({ rooms }) => {
  const newRooms = useCallback(() => {
    return rooms.map((room) => {
      return { ...room, date: Math.floor(Number(room.date)) * 1000 };
    });
  }, [rooms]);

  return (
    <>
      {newRooms().map((room) => (
        <CardRoom key={room.id} {...room} />
      ))}
    </>
  );
};
