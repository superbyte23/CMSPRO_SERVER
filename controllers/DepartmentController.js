import { Department } from "../models/schema.js";

export const findAll = async (req, res) => {
  try {
    const response = await Department.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};
export const findOne = async (req, res) => {
  try {
    const response = await Department.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};
export const create = async (req, res) => {
  try {
    const response = await Department.create(req.body);
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};
export const update = async (req, res) => {
  try {
    const response = await Department.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};
export const destroy = async (req, res) => {
  try {
    const response = await Department.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};
