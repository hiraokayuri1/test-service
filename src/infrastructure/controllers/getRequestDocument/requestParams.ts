import { JSONSchema7 } from "json-schema";

export type GetRequestDocumentRequestParams = {
  name: string;
};

export const GetRequestDocumentRequestParamsSchema: JSONSchema7 = {
  type: "object",
  properties: {
    name: {
      type: "string",
      title: "name"
    }
  },
  required: ["name"],
  additionalProperties: false
};