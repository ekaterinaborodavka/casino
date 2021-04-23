import React from "react";

import { CardUser, CardUserProps } from "~components";

export interface UsersListProps {
  users: CardUserProps[];
}

export const UsersList: React.FC<UsersListProps> = ({ users }) => {
  return (
    <>
      {users.map((user, index) => (
        <CardUser key={index} {...user} />
      ))}
    </>
  );
};
