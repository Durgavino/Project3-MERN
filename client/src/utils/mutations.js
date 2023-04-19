import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($name: String!, $email: String!, $password: String!) {
    addUser(name: $name, email: $email, password: $password) {
      token
      user {
        _id
        name
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        name
      }
    }
  }
`;


export const SLEEP_DATA=gql`
mutation sleepinfo($bedTime:String!,$wakeUpTime:String!)
{
  sleepinfo(bedTime:$bedTime,wakeUpTime:$wakeUpTime){
    bedTime
    wakeUpTime
  }
}`;