import { Department, Participant } from "../models/schema.js";

export const findAll = async (req, res) => {
  try {
    const response = await Participant.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};
export const findOne = async (req, res) => {
  try {
    const response = await Participant.findOne({
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
    const response = await Participant.create(req.body);
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};
export const update = async (req, res) => {
  try {
    const response = await Participant.update(req.body, {
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
    const response = await Participant.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};
export const findByProgram = async (req, res) => {
  try {
    const response = await Participant.findAll({
      where: {
        program_id: req.params.id,
      },
      include: [
        {
          model: Department,
          attributes: ["department_name"], // Include only department_name attribute
        },
      ],
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const destroyMultiple = async (req, res) => {
  try {
    const response = await Participant.destroy({
      where: {
        id: req.body.id,
      },
    });
    res.status(200).json(response.data);
  } catch (error) {
    console.log(error.message);
  }
};
