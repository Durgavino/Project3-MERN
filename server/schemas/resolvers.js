const { AuthenticationError } = require('apollo-server-express');
const mongoose = require('mongoose');
const { User, Sleep } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({
                    _id: context.user._id
                }).select('-__v -password')
                    .populate({ path: 'Sleep' });
                console.log(userData, "ME QUERY");
                return userData;
            }
            throw new AuthenticationError('Not logged in')
        },
        Sleeps:async()=>{
            return await Sleep.find();
        }
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

  
        sleepinfo:async(_,{bedTime,wakeUpTime})=>{
            const newbedTime=new Sleep({bedTime,wakeUpTime});
            await newbedTime.save();
            return newbedTime;
        }
    },


};

module.exports = resolvers;


