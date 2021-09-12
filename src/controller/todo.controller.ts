import { Request, Response } from "express";
import { getTodos } from "../service/todo.service";

export async function getTodosHandler(req: Request, res: Response) {
  const todos = await getTodos();

  return res.send(todos);
}
