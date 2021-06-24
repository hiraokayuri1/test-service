import { JSONSchemaType } from "ajv";

export type CreateRequestDocumentRequestBody = {
  id: string;
};

export const CreateRequestDocumentRequestBodySchema: JSONSchemaType<CreateRequestDocumentRequestBody> = {
  required: ["id"],
  type: "object",
  properties: {
    id: { type: "string" }
  },
  additionalProperties: false
};