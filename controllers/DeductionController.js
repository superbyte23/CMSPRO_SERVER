import sequelize from "../config/Database.js";
import { Deduction } from "../models/schema.js";
import { QueryTypes } from "sequelize";

export const findByProgram = async (req, res) => {
  try {
    // const response = await Deduction.findAll({
    //   where: {
    //     program_id: req.params.program_id,
    //     judge_id: req.params.judge_id,
    //   },
    // });

    const response = await sequelize.query(
      `SELECT "Scores".participant_id, 
      "Scores".judge_id, 
      "Scores".score, 
      SUM("Scores".score) AS total_score, 
      COALESCE("Deductions".deduction_points, 0) AS deduction_points, 
      SUM("Scores".score) - COALESCE("Deductions".deduction_points, 0) AS final_score
FROM "Scores"
LEFT JOIN "Deductions" ON "Scores".participant_id = "Deductions".participant_id
                       AND "Scores".judge_id = "Deductions".judge_id
WHERE "Scores".program_id = ${req.params.program_id}
     AND "Scores".judge_id = ${req.params.judge_id}
GROUP BY "Scores".participant_id, "Scores".judge_id, "Deductions".deduction_points;
`,
      {
        type: QueryTypes.SELECT,
      }
    );
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const create = async (req, res) => {
  try {
    const response = await Deduction.create(req.body);
    res.status(201).json(response);
  } catch (error) {
    console.log(error.message);
  }
};
