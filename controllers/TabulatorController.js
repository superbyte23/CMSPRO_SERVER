import { Tabulator, User } from "../models/schema.js";

export const findByProgram = async (req, res) => {
  try {
    const response = await Tabulator.findAll({
      where: {
        program_id: req.params.id,
      },
      include: [
        {
          model: User,
          attributes: ["fullname", "email"],
        },
      ],
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};
export const findAll = async (req, res) => {
  try {
    const response = await Tabulator.findAll({
      include: [
        {
          model: User,
          attributes: ["fullname", "email"],
        },
      ],
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};
export const findOne = async (req, res) => {
  try {
    const response = await Tabulator.findOne({
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
    const response = await Tabulator.bulkCreate(req.body);
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};
export const update = async (req, res) => {
  try {
    const response = await Tabulator.update({
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
    const response = await Tabulator.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};
export const deleteMultiple = async (req, res) => {
  try {
    const idsArray = req.body.id.map((obj) => obj.id);
    console.log(idsArray);
    const response = await Tabulator.destroy({
      where: {
        id: idsArray,
      },
    });
    res.status(200).json(response.data);
  } catch (error) {
    console.log(error.message);
  }
};
