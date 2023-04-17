import { gql } from '@apollo/client';

// export const QUERY_USERS = gql`
//   query allUsers {
//     users {
//       _id
//       name
//       email
//     }
//   }
// `;

// export const QUERY_SINGLE_USER = gql`
//   query singleUser($userId: ID!) {
//     user(userId: $userId) {
//       _id
//       name
      
//     }
//   }
// `;

// export const QUERY_SLEEPDATA=gql`
// query sleepinfom(Sleep) {
//    {
//     bedTime
//     wakeUpTime
//     sleepDuration
//   }
// }
// `

export const QUERY_ME=gql`
{
  me{
    _id
    name
    email
    password
    sleepinform{
      bedTime
      wakeUpTime
      sleepDuration
    }
  }
}

`;

