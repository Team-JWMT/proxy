'use strict'

require('dotenv').config;
let express = require('express');
let cors = require('cors');

const Company = require('./models/company.js');

const app = (express.json());
const mongoose = require('mongoose');

app.use(cors());
app.use(express.json())

const db = mongoose.connections;
db.on('error', console.error.bind('connection: error;'));
db.once('open', function { (console.log('Mongoose is connected');
});

mongoose.connect(process.env.DB_URL);

const PORT = process.env.PORT || 3003;

app.get('/company');
app.post('company');
app.put('/company');
app.delete('/company');

getCompany = async (req, res, next) => {
  console.log('You have the company');
  try {
    let result = Company.find({})
    res.status(200).send(result);
  } catch (error) {
    console.log('You do not have the company')
    next(error);
  }
}

postCompany = async (req, res, next) => {
  console.log('Your company posted');
  try {
    let createdCompany = await Company.create(req.body);
    res.status(200).send(createdCompany);
  } catch (error) {
    console.log('Company not posting')
    next(error)
  }
}

deleteCompany = async (req, res, next) => {
  console.log('Company deleting');
  try {
    let id = req.params.id
    await Company.findByIdandDelete(id);
    res.status(200).send('Company no longer exists here')
  } catch (error) {
    next(error)
  }
}

putCompany = async (req, res, next) => {
  try {
  let id = req.params.id;
  let updatedCompany = req.body
  let updatedCompanyFromDatabase = await Company.findByIdandUpdate(id, updatedCompany({new: true, overwrite: true }));
  res.status(200).send(updatedCompanyFromDatabase);
  } catch (error) {
    next(error)
  }
}

app.listen(PORT, () => console.log(`listening on ${PORT}`));


