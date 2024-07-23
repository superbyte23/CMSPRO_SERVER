import { Event } from "../models/schema.js";

export const getAllEvents = async (req, res) => {
  try {
    const response = await Event.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getEvent = async (req, res) => {
  try {
    const response = await Event.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createEvent = async (req, res) => {
  try {
    await Event.create({
      event_name: req.body.eventName,
      event_date_start: req.body.startDate,
      event_date_end: req.body.endDate,
      event_color: req.body.selectedColor,
    });
    res.status(201).json({ msg: "Event Created" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ msg: error.message });
  }
};

export const updateEvent = async (req, res) => {
  try {
    await Event.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "User Updated" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteEvent = async (req, res) => {
  try {
    await Event.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(201).json({ msg: "Event Deleted" });
  } catch (error) {
    console.log(error.message);
  }
};
