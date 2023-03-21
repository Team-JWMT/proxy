'use strict'
const company = require('./modules/company.js');
let express = require('express');
let cors = require('cors');

require('dotenv').config;

const app = express();

app.use(cors());
app.use(express.json())

const PORT = process.env.PORT || 3003;

app.get('/company', companyHandler);

function companyHandler(request, response) {
  const { search, location } = request.query;

  company(search, location)
    .then(company => response.send(company).status(200))
    .catch((error) => {
      console.error(error);
      response.status(200).send('Sorry. Something went wrong!')
    })
}

app.listen(PORT, () => console.log(`listening on ${PORT}`));
