import { Express, Request, Response } from "express";
import {
  createTodoHandler,
  getTodosHandler,
} from "./controller/todo.controller";

export default function (app: Express): void {
  app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));

  // GET all todos
  app.get("/api/todos", getTodosHandler);

  // Create new todo
  app.post("/api/todos", createTodoHandler);

  // TODO
  // Update todo
  // Remove todo
}
