import { Request, Response } from "express";
import { createTodo, getTodos } from "../service/todo.service";

export async function getTodosHandler(req: Request, res: Response) {
  const todos = await getTodos();

  return res.send(todos);
}

export async function createTodoHandler(req: Request, res: Response) {
  const body = req.body;

  const createdTodo = await createTodo(body);

  return res.send(createdTodo);
}
