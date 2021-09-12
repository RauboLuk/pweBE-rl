import { Express, Request, Response } from "express";
import {
  createTodoHandler,
  deleteTodoHandler,
  getTodosHandler,
  updateTodoHandler,
} from "./controller/todo.controller";

export default function (app: Express): void {
  app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));

  // Get all todos
  app.get("/api/todos", getTodosHandler);

  // Create new todo
  app.post("/api/todos", createTodoHandler);

  // Update todo
  app.post("/api/todos/:id", updateTodoHandler);

  // Remove todo
  app.delete("/api/todos/:id", deleteTodoHandler);
}
