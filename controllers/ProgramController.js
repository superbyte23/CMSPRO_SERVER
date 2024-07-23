import { Category, Criteria, Participant, Program } from "../models/schema.js";

export const findAll = async (req, res) => {
  try {
    const response = await Program.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};
export const findOne = async (req, res) => {
  try {
    const response = await Program.findOne({
      where: {
        id: req.params.id,
      },
      include: [
        {
          model: Participant,
        },
        {
          model: Criteria,
        },
      ],
      order: [[Criteria, "createdAt", "ASC"]],
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};
export const create = async (req, res) => {
  try {
    await Program.create({
      program_name: req.body.program_name,
      event_id: req.body.event_id,
      category_id: req.body.category_id,
      scheduled_date: req.body.scheduled_date,
    });
    res.status(201).json({ msg: "Event Created" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ msg: error.message });
  }
};
export const update = async (req, res) => {};
export const destroy = async (req, res) => {};

export const findByEvent = async (req, res) => {
  try {
    const response = await Program.findAll({
      where: {
        event_id: req.params.id,
      },
      include: [
        {
          model: Category,
          attributes: ["category"],
        },
      ],
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};
