import { ErrorRequestHandler, NextFunction, Request, Response } from "express";

export const unknownEndpoint = (request: Request, response: Response) => {
  response.status(404).send({ error: "unknown endpoint" });
};

export const errorHandler: ErrorRequestHandler = (
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  if (error.name === "ValidationError" || error.name === "CastError") {
    return response.status(400).send({ error: error.message });
  }
  next(error);
};
