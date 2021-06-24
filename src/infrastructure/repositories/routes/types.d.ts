import { Request } from "express";

export interface RequestBase<ReqParams, ReqBody, ReqQuery>
  extends Request<ReqParams, {}, ReqBody, ReqQuery> {}