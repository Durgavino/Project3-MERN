require('dotenv').config();
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
//const cors=require('cors');
const path = require('path');
const dbconnect = require('./config/connection');
const { authMiddleware } = require('./utils/auth');

const { typeDefs, resolvers } = require('./schemas');
//const path = require('path');


const PORT = process.env.PORT || 3000;
const app = express();
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware,
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// If this is production allow static files to be served from the build folder
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}



// app.post('/sleepdata', async (req, res) => {
//     try {
//         await dbconnect;
//          const sleepcollection = dbconnect.db('sleepyhead2Pro').collection('sleepdata');
//        // const sleepcollection = dbconnect.collection('sleepdata');
//         const result = await sleepcollection.insertOne(req.body);
//         res.send(result);
//     } catch (err) {
//         console.error(err);
//         res.status(500).send(err);
//     }
//     // finally {
//     //   await client.close();
//     // }
// });



// //Load the stage for our react app, since it is a single page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});
// app.get('/check', (req, res) => {
//     res.send('hello World')
// })

// app.listen(PORT, ()=>{
//     console.log("App is listening on: http://localhost:" + PORT)
// })

const startApolloServer = async (typeDefs, resolvers) => {
    await server.start();
    server.applyMiddleware({ app });

    // dbconnect.once('open', () => {
        app.listen(PORT, () => {
            console.log(`API server running on port ${PORT}!`);
            console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
        })
   // })
};
startApolloServer(typeDefs, resolvers);

