import { Score } from "../models/schema.js";

export const findScoreByJudge = async (req, res) => {
  try {
    const response = await Score.findAll({
      where: {
        program_id: req.params.program_id,
        judge_id: req.params.judge_id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const create = async (req, res) => {
  try {
    console.log(req.body);
    const [score, created] = await Score.upsert({
      id: req.body.id,
      program_id: req.body.program_id,
      judge_id: req.body.judge_id,
      criteria_id: req.body.criteria_id,
      participant_id: req.body.participant_id,
      score: req.body.score,
    });
    if (created) {
      res.status(201).json({ msg: "Score Added Successfully" });
    } else {
      res.status(201).json({ msg: "Score Updated Successfully" });
    }
  } catch (error) {
    console.log(error.message);
  }
};
