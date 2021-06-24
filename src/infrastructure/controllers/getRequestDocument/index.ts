import { Response } from "express";
import { GetRequestDocumentResponseBody } from "./responseBody";
import { GetRequestDocumentRequestQuery } from "./requestQuery";
import { RequestBase } from "~src/infrastructure/routes/types";
import { GetRequestDocumentRequestParams } from "./requestParams";

export const getRequestDocument = async (
  req: RequestBase<
    GetRequestDocumentRequestParams,
    {},
    GetRequestDocumentRequestQuery
  >,
  res: Response
): Promise<Response> => {
  console.log(req.query);
  console.log(req.params);

  const result: GetRequestDocumentResponseBody = {
    ok: true,
    data: {
      requestDocument: {}
    }
  };

  return res.json(result);
};
