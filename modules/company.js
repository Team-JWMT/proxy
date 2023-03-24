'use strict';

const axios = require('axios');
require('dotenv').config();

class Company {
  constructor(CompanyObject) {
    this.name = CompanyObject.name,
    this.image_url = CompanyObject.image_url,
    this.url = CompanyObject.url,
    this.review_count = CompanyObject.review_count,
    this.categories = CompanyObject.categories,
    this.rating = CompanyObject.rating,
    this.transactions = CompanyObject.transactions,
    this.price = CompanyObject.price,
    this.location = CompanyObject.location,
    this.display_phone = CompanyObject.display_phone;
  }
}

async function getCompanies(search, location) {
  let config = {
    headers: {
      Authorization:
          `Bearer ${process.env.REACT_APP_YELP_API_KEY}`,
    },
    params: {
      term: search,
      location: location
    }
  };

  let url = 'https://api.yelp.com/v3/businesses/search';

  let response = await axios.get(url, config).then(response => parseCompanies(response.data));

  return response;
}

function parseCompanies(listOfCompany) {
  try {
    const companySummary = listOfCompany.businesses.map(company => {
      return new Company(company);
    });
    return Promise.resolve(companySummary);
  } catch (e) {
    return Promise.reject(e);
  }
}

module.exports = getCompanies;
