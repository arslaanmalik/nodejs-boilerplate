const mongoose = require('mongoose');
const config = require('config');
const e = require('express');
//const db = config.get('mongoURI');2
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });

    console.log('MongoDB Connected...');
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = connectDB;
