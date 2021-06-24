import { JSONSchema7 } from "json-schema";

export type GetRequestDocumentRequestQuery = {
  id: string;
};

export const GetRequestDocumentRequestQuerySchema: JSONSchema7 = {
  type: "object",
  properties: {
    id: {
      type: "string",
      title: "id"
    }
  },
  required: ["id"],
  additionalProperties: false
};