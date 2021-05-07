import { gql } from "@apollo/client";

export const CREATE_ROOM = gql`
  mutation CreateRoom($date: Int!, $bid: Int!, $maxUsers: Int!) {
    createRoom(date: $date, bid: $bid, maxUsers: $maxUsers) {
      date
      bid
      maxUsers
    }
  }
`;
