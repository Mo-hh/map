const mongoose = require('mongoose');

const shopModel = require('./models/shopModel');
const dotenv = require('dotenv').config();
const faker = require('faker');


const connectToMongo = async () => {

try {

  console.log('Attempt to connect ');
  await mongoose.connect(process.env.DB_URL,{useNewUrlParser:true});
  console.log('connected.Attempt to seed');


const createRandomShops = () => {

  const allshops= [];

  for (let  i = 0; i < 5000; i++) {
 const fakeshop =
 {  name:faker.company.companyName(),
    cheapesDish:faker.commerce.price(),
    location:{type:'point',coordinates:[faker.address.longitude(),faker.address.latitude()]}




   }
    allshops.push(fakeshop);

  }
     return allshops;

}


  const allshops =createRandomShops();



  await shopModel.create(allshops)


  //that mean i create new point in the map )

  console.log('Document was created ');
  await mongoose.disconnect(process.env.DB_URL);
  console.log('disconnect');

}catch(error) {
  console.log(error);
}
}

connectToMongo();
