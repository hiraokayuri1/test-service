import { Response } from "express";
import { RequestBase } from "~src/infrastructure/routes/types";
import { CreateRequestDocumentResponseBody } from "./responseBody";
import { CreateRequestDocumentRequestBody } from "./requestBody";

export const createRequestDocument = async (
  req: RequestBase<{}, CreateRequestDocumentRequestBody, {}>,
  res: Response
): Promise<Response> => {
  console.log(req.body);

  const result: CreateRequestDocumentResponseBody = {
    ok: true,
    data: {
      requestDocument: {}
    }
  };

  return res.json(result);
};