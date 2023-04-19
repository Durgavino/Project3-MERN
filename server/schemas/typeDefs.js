const { gql }=require('apollo-server-express');

const typeDefs=gql`
type User{
    _id:ID
    name:String
    email:String
    password:String
    sleepinfom:[Sleep]
}
type Auth{
    token:ID!
    user:User
}
type Query{
   me:User
}
type Mutation{
    addUser(name:String!,email:String!,password:String!):Auth
    login(email:String!,password:String!):Auth
    removeUser(userId:ID!):User
    sleepinfo(bedTime:String!,wakeUpTime:String!):Sleep
}
type Sleep{
    _id:ID!
    bedTime:String!
    wakeUpTime:String!
  
}
type Query{
    Sleeps:[Sleep]!
}
input Sleepdata{
    bedTime:String!
    wakeUpTime:String!
    
   }
`;
module.exports=typeDefs;




// sleepinformation(userId:ID!):User

// sleepinformation(Sleepdata:Sleepdata!):User


// 15 type Query{
//     users:[User]!
//     user(userId:ID!):User
//     sleepinfom:[Sleep]


// 24-28type Sleep{
//     bedTime:Int
//     wakeUpTime:Int
//     sleepDuration:Int
// }

// 22    sleepinfo(Sleepdata:Sleepdata!):User