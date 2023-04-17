const { AuthenticationError } = require('apollo-server-express');
const { User,Sleep } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
            return User.find();
        },
        user: async (parent, args) => {
            return User.findOne(args.id);
        },
        sleepinformation: async (parent,{userId}) => {
            return User.findOne(userId)
            .populate({
                path:"Sleepdata",
                populate:({
                    path:"sleepDuration"
                })
            })
        },
    },
    Mutation: {
        addUser: async (parent, { name, email, password }) => {
            const user = await User.create({ name, email, password });
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('No profile with this email found!');
            }
            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect password!');
            }

            const token = signToken(user);
            return { token, user };
        },

        removeUser: async (parent, { userID }) => {
            return User.findOneAndDelete({ _id: userID });
        },

        sleepinfo:async(parent,{Sleepdata},context)=>{
            //console.log(Sleepdata);
            console.log(Sleepdata);
            if(context.user){
                const newuser=await User.findOneAndUpdate({
                    _id:context.user._id 
                },
                {$addToSet:{ sleepinform:Sleepdata }},
                {new:true,runValidators:true}
                
                
                );
                return newuser;
            }
            throw new AuthenticationError('You need to be logged in !');
        }
    },


};

module.exports=resolvers;


