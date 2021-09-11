import mongoose from "mongoose";

export interface TodoDocument extends mongoose.Document {
  msg: string;
  isDone: boolean;
}

const TodoSchema = new mongoose.Schema(
  {
    msg: { type: String, required: true },
    isDone: { type: Boolean, required: true },
  },
  {
    timestamps: true,
  }
);

const Todo = mongoose.model<TodoDocument>("Todo", TodoSchema);

export default Todo;
