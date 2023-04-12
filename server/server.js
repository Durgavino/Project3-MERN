const express = require('express');
const app = express();
const cors = require('cors');
const bcrypt =require('bcrypt'),
const PORT = process.env.PORT || 8080;
//const path = require('path');
const db = require('./config/connection');
const salt=10;

//middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
//db();

// If this is production allow static files to be served from the build folder
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '../client/build')));
// }
// //Load the stage for our react app, since it is a single page
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });
app.get('/check',(req,res)=>{
    res.send('hello World')
})

// app.listen(PORT, ()=>{
//     console.log("App is listening on: http://localhost:" + PORT)
// })


db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
        //console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
})
  