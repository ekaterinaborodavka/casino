/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateRoom
// ====================================================

export interface CreateRoom_createRoom {
  __typename: "Room";
  date: number;
  bid: number;
  maxUsers: number;
}

export interface CreateRoom {
  createRoom: CreateRoom_createRoom;
}

export interface CreateRoomVariables {
  date: number;
  bid: number;
  maxUsers: number;
}
