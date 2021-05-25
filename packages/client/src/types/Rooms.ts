/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Rooms
// ====================================================

export interface Rooms_rooms_users {
  __typename: "User";
  id: string;
  name: string;
  img: string;
}

export interface Rooms_rooms {
  __typename: "Room";
  id: string;
  numberOfUsers: number;
  maxUsers: number;
  bid: number;
  date: number;
  users: Rooms_rooms_users[];
}

export interface Rooms {
  rooms: Rooms_rooms[];
}
