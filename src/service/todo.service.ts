import { DocumentDefinition } from "mongoose";
import Todo, { TodoDocument } from "../model/todo.model";

export function getTodos() {
  return Todo.find({});
}

export function createTodo(body: DocumentDefinition<TodoDocument>) {
  return Todo.create(body);
}

export function findTodo(id: string) {
  return Todo.findById(id);
}

export function updateTodo(id: string, body: DocumentDefinition<TodoDocument>) {
  return Todo.findByIdAndUpdate(id, body, { new: true, runValidators: true });
}
