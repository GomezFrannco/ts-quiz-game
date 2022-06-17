import mongoose from "mongoose";

const Schema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  choices: {
    type: [String],
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
});

export const questionModel = mongoose.model("Question", Schema);
