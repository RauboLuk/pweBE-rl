import Todo from "../model/todo.model";

export function getTodos() {
  return Todo.find({});
}
