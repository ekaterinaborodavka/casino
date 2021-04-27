import { gql } from "@apollo/client";

export const GET_ROOMS = gql`
  query {
    getRooms {
      id
      numberOfUsers
      bid
      date
      users {
        id
        name
        img
      }
    }
  }
`;

export const GET_ONE_ROOMS = gql`
  query GetOneRoom($id: ID) {
    getOneRoom(id: $id) {
      id
      numberOfUsers
      bid
      date
      users {
        id
        name
        img
      }
    }
  }
`;
