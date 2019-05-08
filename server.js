const express = require('express');
const app = express();
const morgan = require('morgan');
const connetctDB =require('./utilities/connectDB');
const errorHandler = require('./utilities/errorHandler')

const shopsRouter = require('./routes/shopsRouter');



app.listen(4000, () => console.log('Server listens to requests'));
connetctDB();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static('Browser'));
app.use('/shops', shopsRouter);
