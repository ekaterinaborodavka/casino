import React from "react";

import { CardUser, CardUserProps } from "~components";

export interface UsersProps {
  users: CardUserProps[];
}

export const Users: React.FC<UsersProps> = ({ users }) => {
  return (
    <>
      {users.map((user, index) => (
        <CardUser key={index} {...user} />
      ))}
    </>
  );
};
