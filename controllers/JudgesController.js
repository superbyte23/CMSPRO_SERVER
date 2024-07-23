import { Judge, Program, User, Event } from "../models/schema.js";

export const findByProgram = async (req, res) => {
  try {
    const response = await Judge.findAll({
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
export const findJudgesPrograms = async (req, res) => {
  try {
    const response = await Judge.findAll({
      where: {
        user_id: req.params.id,
      },
      include: [
        {
          model: Program,
          where: {
            status: "active", // Add your condition here
          },
          include: [
            {
              model: Event,
            },
          ],
        },
      ],
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};
export const findJudgeId = async (req, res) => {
  try {
    const response = await Judge.findOne({
      where: {
        user_id: req.params.user_id,
        program_id: req.params.program_id,
      },
      include: [
        {
          model: User,
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
    const response = await Judge.findAll({
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
    const response = await Judge.findOne({
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
    const response = await Judge.bulkCreate(req.body);
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};
export const update = async (req, res) => {
  try {
    const response = await Judge.update({
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
    const response = await Judge.destroy({
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
    const response = await Judge.destroy({
      where: {
        id: idsArray,
      },
    });
    res.status(200).json(response.data);
  } catch (error) {
    console.log(error.message);
  }
};
