import mongoose from "mongoose";

export interface TodoDocument extends mongoose.Document {
  text: string;
  isDone: boolean;
}

const TodoSchema = new mongoose.Schema(
  {
    text: { type: String, required: true },
    isDone: { type: Boolean, required: true },
  },
  {
    timestamps: true,
  }
);

const Todo = mongoose.model<TodoDocument>("Todo", TodoSchema);

export default Todo;
