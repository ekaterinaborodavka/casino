import { gql } from "@apollo/client";

export const GET_ROOMS = gql`
  query {
    rooms {
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

export const GET_ONE_ROOM = gql`
  query OneRoom($id: ID) {
    oneRoom(id: $id) {
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
