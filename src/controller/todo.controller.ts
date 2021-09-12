import { NextFunction, Request, Response } from "express";
import {
  createTodo,
  deleteTodo,
  findTodo,
  getTodos,
  updateTodo,
} from "../service/todo.service";

export async function getTodosHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const todos = await getTodos();

    return res.send(todos);
  } catch (error) {
    next(error);
  }
}

export async function createTodoHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const body = req.body;

  try {
    const createdTodo = await createTodo(body);
    return res.send(createdTodo);
  } catch (error) {
    next(error);
  }
}

export async function updateTodoHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;
  const body = req.body;

  try {
    const todo = await findTodo(id);

    if (!todo) return res.sendStatus(404);

    const updatedTodo = await updateTodo(id, body);

    return res.send(updatedTodo);
  } catch (error) {
    next(error);
  }
}

export async function deleteTodoHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;

  try {
    const todo = await findTodo(id);

    if (!todo) return res.sendStatus(404);

    await deleteTodo(id);

    return res.sendStatus(200);
  } catch (error) {
    next(error);
  }
}
