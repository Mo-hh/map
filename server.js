const express = require('express');
const app = express();
const morgan = require('morgan');
const connetctDB =require('./utilities/connectDB');
const errorHandler = require('./utilities/errorHandler')

const shopsRouter = require('./routes/shopsRouter');
