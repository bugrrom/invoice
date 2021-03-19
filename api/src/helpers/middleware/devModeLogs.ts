import dg from "debug";
import { Request, Response } from "express";

const debug = dg("server:init");

export const devModeLogs = (req: Request, res: Response, next) => {
  if (process.env.NODE_ENV === "development") {
    const body =
      req.method === "GET"
        ? "Body not supported for GET"
        : JSON.stringify(req.body, null, 2);

    debug(`${req.method}\n${body}`);
    next();
  }
};
