'use strict'

const mongoose = require('mongoose');

const { Schema } = mongoose;

const profileSchema = new Schema({
  profile_name: {type: String, required: true},
  profile_email: {type: String, required: true},
  favorited: {type: Array, require: true}
})

const ProfileModel = mongoose.model('Profile', profileSchema);

module.exports = ProfileModel;