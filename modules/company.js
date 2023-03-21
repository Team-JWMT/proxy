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
