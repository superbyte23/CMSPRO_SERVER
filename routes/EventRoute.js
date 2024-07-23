import express from "express";

import {
  createEvent,
  deleteEvent,
  getAllEvents,
  getEvent,
  updateEvent,
} from "../controllers/EventController.js";

const router = express.Router();

router.get("/events", getAllEvents);
router.get("/events/:id", getEvent);
router.post("/events", createEvent);
router.patch("/events/:id", updateEvent);
router.delete("/events/:id", deleteEvent);

export default router;
