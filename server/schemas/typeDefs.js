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
    sleepinfo(Sleepdata:Sleepdata!):User
}
type Sleep{
    bedTime:Int
    wakeUpTime:Int
    sleepDuration:Int
}
input Sleepdata{
    bedTime:Int
    wakeUpTime:Int
    sleepDuration:Int
   }
`;
module.exports=typeDefs;




// sleepinformation(userId:ID!):User

// sleepinformation(Sleepdata:Sleepdata!):User


// 15 type Query{
//     users:[User]!
//     user(userId:ID!):User
//     sleepinfom:[Sleep]