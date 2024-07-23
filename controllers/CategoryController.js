import { Category } from "../models/schema.js";

export const findAll = async (req, res) => {
  try {
    const response = await Category.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const findOne = async (req, res) => {
  try {
    const response = await Category.findOne({
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
    await Event.create({
      category: req.body.category,
    });
    res.status(200).json({ msg: "Category Created" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ msg: error.message });
  }
};

export const update = async (req, res) => {};

export const destroy = async (req, res) => {};
