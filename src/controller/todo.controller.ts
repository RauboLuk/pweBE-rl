import { Request, Response } from "express";
import {
  createTodo,
  deleteTodo,
  findTodo,
  getTodos,
  updateTodo,
} from "../service/todo.service";

export async function getTodosHandler(req: Request, res: Response) {
  const todos = await getTodos();

  return res.send(todos);
}

export async function createTodoHandler(req: Request, res: Response) {
  const body = req.body;

  const createdTodo = await createTodo(body);

  return res.send(createdTodo);
}

export async function updateTodoHandler(req: Request, res: Response) {
  const { id } = req.params;
  const body = req.body;

  const todo = await findTodo(id);

  if (!todo) return res.sendStatus(404);

  const updatedTodo = await updateTodo(id, body);

  return res.send(updatedTodo);
}

export async function deleteTodoHandler(req: Request, res: Response) {
  const { id } = req.params;

  const todo = await findTodo(id);

  if (!todo) return res.sendStatus(404);

  await deleteTodo(id);

  return res.sendStatus(200);
}
