'use-strict'

require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URL);

const Profile = require('./models/profile.js');

async function seed() {

  await Profile.create({
    profile_name: "Joe",
    profile_email: "some@gmail.com",
    favorited: [
      {
        name: "Serious Pie Downtown",
        image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/dy0pJ5hIEX5APuotqrgF7A/o.jpg",
        url: "https://www.yelp.com/biz/serious-pie-downtown-seattle-2?adjust_creative=C7rf72hArHcT0BXox02P5w&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=C7rf72hArHcT0BXox02P5w",
        review_count: 4498,
        categories: [
          {
            "alias": "pizza",
            "title": "Pizza"
          },
          {
            "alias": "salad",
            "title": "Salad"
          },
          {
            "alias": "bars",
            "title": "Bars"
          }
        ],
        rating: 4,
        transactions: [
          "pickup",
          "delivery"
        ],
        price: "$$",
        location: {
          address1: "2001 4th Ave",
          address2: null,
          address3: "",
          city: "Seattle",
          zip_code: "98121",
          country: "US",
          state: "WA",
          display_address: [
            "2001 4th Ave",
            "Seattle, WA 98121"
          ]
        },
        display_phone: "(206) 838-7388"
      },
      {
        name: "Moto",
        image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/FBmvjyC1wH7-N_lIE_M_lQ/o.jpg",
        url: "https://www.yelp.com/biz/moto-seattle?adjust_creative=C7rf72hArHcT0BXox02P5w&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=C7rf72hArHcT0BXox02P5w",
        review_count: 153,
        categories: [
          {
            "alias": "pizza",
            "title": "Pizza"
          },
          {
            "alias": "icecream",
            "title": "Ice Cream & Frozen Yogurt"
          }
        ],
        rating: 4.5,
        transactions: [
          "delivery"
        ],
        price: "$$",
        location: {
          address1: "4526 42nd Ave SW",
          address2: "",
          address3: null,
          city: "Seattle",
          zip_code: "98116",
          country: "US",
          state: "WA",
          display_address: [
            "4526 42nd Ave SW",
            "Seattle, WA 98116"
          ]
        },
        display_phone: "(206) 420-8880"
      }
    ]
  });

  await Profile.create({
    profile_name: "Ann",
    profile_email: "some_other@gmail.com",
    favorited: [
      {
        name: "Rocco's",
        image_url: "https://s3-media3.fl.yelpcdn.com/bphoto/AWBXTETwVoCALRNEO_f3eQ/o.jpg",
        url: "https://www.yelp.com/biz/roccos-seattle?adjust_creative=C7rf72hArHcT0BXox02P5w&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=C7rf72hArHcT0BXox02P5w",
        review_count: 1762,
        categories: [
          {
            alias: "bars",
            title: "Bars"
          },
          {
            alias: "pizza",
            title: "Pizza"
          }
        ],
        rating: 4,
        transactions: [
          "delivery",
          "pickup"
        ],
        price: "$$",
        location: {
          address1: "2312 2nd Ave",
          address2: "",
          address3: "",
          city: "Seattle",
          zip_code: "98121",
          country: "US",
          state: "WA",
          display_address: [
            "2312 2nd Ave",
            "Seattle, WA 98121"
          ]
        },
        display_phone: "(206) 397-4210"
      }
    ]
  });

  mongoose.disconnect();
}

seed();