'use strict'

require('dotenv').config;

const Profile = require('./models/profile.js')
const company = require('./modules/company.js');
let express = require('express');
let cors = require('cors');
const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URL);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Mongoose is connected');
});

const app = express();
app.use(cors());
app.use(express.json())

const PORT = process.env.PORT || 3003;

//DB Operations
app.get('/collection/:id', getProfileCompanies);
app.post('/collection', addProfile);
app.delete('/collection/:id', deleteProfile);
app.put('/collection/:id', updateProfileCompany);

async function getProfileCompanies(req, res, next) {
  try {
    let id = req.params.id
    let result = await Profile.findById(id);
    console.log(result);
    res.status(200).send(result);
  } catch (err) {
    console.error(err);
    res.status(404).send("Could not find requested Profile's favorited");
  }
}

async function addProfile(req, res, next) {
  try {
    let newProfile = await Profile.create(req.body);
    res.status(200).send(newProfile);
  } catch (err) {
    console.error(err);
    res.status(500).send('Could not create Profile');
  }
}

async function deleteProfile(req, res, next) {
  try {
    let id = req.params.id;
    await Profile.findByIdAndDelete(id);
    res.status(200).send('Profile was removed');
  } catch (err) {
    console.error(err);
    res.status(404).send('Profile could not be found');
  }
}

async function updateProfileCompany(req, res, next) {
  try {
    let id = req.params.id;
    let update = req.body;
    let updatedCompany = await Profile.findByIdAndUpdate(id, update, { new: true, overwrite: true });
    console.log(updatedCompany);
    res.status(200).send(updatedCompany);
  } catch (err) {
    console.error(err);
    res.status(500).send("Could not update Profile's list of companies");
  }
}

//Yelp API calls
app.get('/search', companyHandler);

function companyHandler(request, response) {
  const { term, location } = request.query;

  company(term, location)
    .then(company => response.send(company).status(200))
    .catch((error) => {
      console.error(error);
      response.status(200).send('Sorry. Something went wrong!')
    })
}

app.listen(PORT, () => console.log(`listening on ${PORT}`));
