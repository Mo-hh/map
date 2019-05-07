const mongoose= require('mongoose');
const dotenv = require('dotenv').config();

const connetctDB = async () => {

  console.log('About to connect to  Data base');
  await mongoose.connect(process.env.DB_URL,{useNewUrlParser:true});
  console.log('connect to database success');
}

module.exports=connetctDB;
