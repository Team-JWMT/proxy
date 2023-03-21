'use strict'

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
    this.display_phone = CompanyObject.display_phone,
  
  }
}

async function getCompanies(request, response, next) {

  let companyData = request.query.search;
  console.log(companyData);
  try {

  let headers = {
    Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`
    }
  let params = {
  location: {search},
  term: {location},
}

 let response = axios.get('https://api.yelp.com/v3/businesses/search',headers, params)
console.log(response);
} catch(error) {
  Promise.resolve()
  .then(() => {
    throw new Error(err.message);
  })
  .catch(next);
};

module.exports = getCompanies;


