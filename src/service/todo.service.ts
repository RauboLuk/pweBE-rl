import { DocumentDefinition } from "mongoose";
import Todo, { TodoDocument } from "../model/todo.model";

export function getTodos() {
  return Todo.find({});
}

export function createTodo(body: DocumentDefinition<TodoDocument>) {
  return Todo.create(body);
}
