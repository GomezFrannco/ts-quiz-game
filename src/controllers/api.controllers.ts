import { Request, Response } from "express";
import { questionModel } from "../models/question.models.js";
import { Question } from "../interfaces/questions.interfaces.js";

export async function getApi(_req: Request, res: Response): Promise<Response> {
  try {
    const response = await questionModel.find();
    return res.status(200).json({
      Questions: response,
    });
  } catch (err) {
    return res.status(500).json({
      Message: err.message,
    });
  }
}
export async function postApi(req: Request, res: Response): Promise<Response> {
  const newQuestion: Question = req.body;
  try {
    const response = await questionModel.create(newQuestion);
    return res.status(200).json({
      Message: "New question added succesfully.",
      Question: response,
    });
  } catch (err) {
    return res.status(500).json({
      Message: err.message,
    });
  }
}
// export function putApi(req: Request, res: Response): Response {
// };
// export function deleteApi(req: Request, res: Response): Response {
// };
