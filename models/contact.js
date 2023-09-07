const { Schema, model } = require('mongoose');
const { handleMongooseError } = require('../helpers');
const Joi = require('joi');

const phoneRegex = /^\(\d{3}\) \d{3}-\d{4}$/;

const contactSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
      
    },
    phone: {
      type: String,
      undefined: true,
      match: phoneRegex,
      
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
     
    },
  },
  { versionKey: false, timestamps: true },
);

const Contact = model('contact', contactSchema);
contactSchema.post('save', handleMongooseError);

const addSchema = Joi.object({
  name: Joi.string().min(2).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().pattern(phoneRegex).required(),
  favorite: Joi.boolean(),
});
const updateFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

const schemas = {
  addSchema,
  updateFavoriteSchema,
};
module.exports = { Contact, schemas };
