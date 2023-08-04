const Joi = require('joi');
const { offsetPaginaionSchema, makeSortSchema } = require('../../shared/schemas');

exports.postUserSchema = {
  body: Joi.object({
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    username: Joi.string().required(),
    password: Joi.string().required(),
  }),
};

exports.getUsersSchema = {
  query: Joi.object({
    q: Joi.string(),
    page: offsetPaginaionSchema,
    sort: makeSortSchema(["first_name", "username"]),
    filters: Joi.object({
      is_deleted: Joi.boolean(),
    }),
  }),
};

exports.loginUserSchema = {
  body: Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
  }),
};

exports.patchUserSchema = {
  params: Joi.object({
    id: Joi.string(),
  }),
  body: Joi.object({
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    username: Joi.string(),
    password: Joi.string()
  }),
};

exports.showUserSchema = {
  params: Joi.object({
    id: Joi.string(),
  }),
};

exports.deleteUserSchema = {
  params: Joi.object({
    id: Joi.string(),
  }),
};
