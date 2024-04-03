import { NextFunction, Request, Response } from "express";
import swaggerUi from "swagger-ui-express";
import "express-async-errors";
import express from "express";
import "reflect-metadata";
import cors from "cors";
import { connectToDatabase } from "./database";

import "./shared/index";

import { routes } from "./routes";

import swaggerDocs from "./swagger.json";

import { AppError } from "./errors/AppErrors";

connectToDatabase();

const app = express();

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(routes);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: `Internal server error - ${err.message}`,
    });
  },
);

app.listen(9999, () => {
  console.log(`${process.env.PROJECT_NAME}`);
});
