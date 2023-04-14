const mongoose=require('mongoose');

// module.exports=()=>{
// const connectionParams={
//   useNewUrlParser: true,
//     useUnifiedTopology: true,
// };
// try{
//   mongoose.connect(process.env.DB,connectionParams);
// console.log("Database connected successfully");
// }
// catch(err){
// console.log(err);
// console.log("Couldnt connected to database");
// }
// }

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/sleepyhead2Pro',
{
  useNewUrlParser: true,useUnifiedTopology: true,
});

module.exports=mongoose.connection;