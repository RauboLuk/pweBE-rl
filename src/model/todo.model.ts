import mongoose from "mongoose";

export interface TodoDocument extends mongoose.Document {
  text: string;
  isDone: boolean;
}

const TodoSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "Text is required"],
      minlength: [1, "Text length have to be at least 1"],
    },
    isDone: {
      type: Boolean,
      required: [true, "isDone is required"],
    },
  },
  {
    timestamps: true,
  }
);

TodoSchema.set("toJSON", {
  transform: (_, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Todo = mongoose.model<TodoDocument>("Todo", TodoSchema);

export default Todo;
