const express = require('express');
const httpValidator = require('../../shared/http-validator');
const addUser = require('./add-user');
const loginUser = require('./login-user');
const listUsers = require('./list-users');
const showUser = require('./show-user');
const editUser = require('./edit-user');
const removeUser = require('./remove-user');

const {
  postUserSchema,
  loginUserSchema,
  getUsersSchema,
  showUserSchema,
  patchUserSchema,
  deleteUserSchema
} = require('./_schemas');


/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const postUser = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, postUserSchema);

    const result = await addUser(req.body);

    res.status(201).json({
      data: result,
    });
  } catch (error) {
    next(error);
  };
};

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const loginUser = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, loginUserSchema);

    const result = await loginUser(req.body);

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  };
};

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const getUsers = async (req, res, next) => {
  try {
    httpValidator({ query: req.query }, getUsersSchema);

    const result = await listUsers({ ...req.query });

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  };
};

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const getUser = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, showUserSchema);

    const result = await showUser(req.params);

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  };
};

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const patchUser = async (req, res, next) => {
  try {
    httpValidator({ params: req.params, body: req.body }, patchUserSchema);

    const result = await editUser({ id: req.params.id, ...req.body });

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  };
};

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const deleteUser = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, deleteUserSchema);

    const result = await removeUser(req.params, req.user);

    res.status(200).json({
      DELETED: result,
    });
  } catch (error) {
    next(error);
  };
};

module.exports = {
  postUser,
  loginUser,
  getUsers,
  getUser,
  patchUser,
  deleteUser
};