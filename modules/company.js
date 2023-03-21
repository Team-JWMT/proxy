'use strict'

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
