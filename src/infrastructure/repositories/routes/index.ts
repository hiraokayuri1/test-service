import { Express } from "express";
import { Validator } from "express-json-validator-middleware";

import { getRequestDocument } from "../controllers/getRequestDocument";
import { GetRequestDocumentRequestQuerySchema } from "../controllers/getRequestDocument/requestQuery";
import { GetRequestDocumentRequestParamsSchema } from "../controllers/getRequestDocument/requestParams";
import { createRequestDocument } from "../controllers/createRequestDocument/index";

export const routes = (app: Express): Express => {
  const validator = new Validator({ allErrors: true });
  const validate = validator.validate;

  app.get("/", (req, res) => {
    return res.status(200).json({ test: "test" });
  });

  app.get(
    "/request-document/:name",
    validate({
      query: GetRequestDocumentRequestQuerySchema,
      params: GetRequestDocumentRequestParamsSchema
    }),
    getRequestDocument
  );

  app.post("/request-document", createRequestDocument);

  return app;
};