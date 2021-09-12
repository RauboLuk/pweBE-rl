import { Express, Request, Response } from "express";
import { getTodosHandler } from "./controller/todo.controller";

export default function (app: Express): void {
  app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));

  // GET all todos
  app.get("/api/todos", getTodosHandler);

  // TODO
  // Create new todo
  // Update todo
  // Remove todo
}
