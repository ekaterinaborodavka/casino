/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: OneRoom
// ====================================================

export interface OneRoom_oneRoom_users {
  __typename: "User";
  id: string;
  name: string;
  img: string;
}

export interface OneRoom_oneRoom {
  __typename: "Room";
  id: string;
  numberOfUsers: number;
  bid: number;
  date: number;
  users: OneRoom_oneRoom_users[];
}

export interface OneRoom {
  oneRoom: OneRoom_oneRoom;
}

export interface OneRoomVariables {
  id?: string | null;
}
