import { Criteria } from "../models/schema.js";

export const findByProgram = async (req, res) => {
  try {
    const response = await Criteria.findAll({
      where: {
        program_id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const findOne = async (req, res) => {
  try {
    const response = await Criteria.findOne({
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
    const response = await Criteria.create(req.body);
    res.status(201).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const update = async (req, res) => {
  try {
    await Criteria.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Criteria Updated" });
  } catch (error) {
    console.log(error.message);
  }
};

export const destroy = async (req, res) => {
  try {
    await Criteria.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Criteria Deleted" });
  } catch (error) {
    console.log(error.message);
  }
};

export const destroyMultiple = async (req, res) => {
  try {
    const response = await Criteria.destroy({
      where: {
        id: req.body.id,
      },
    });
    res.status(200).json(response.data);
  } catch (error) {
    console.log(error.message);
  }
};
