//Core
import * as express from "express";
import dg from "debug";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import { Request, Response, Application } from "express";

//Initialization
import "./db";
const debug = dg("server:init");
const app: Application = express();
//Routers
import { invoice } from "./routers/invoice";

app.use(
  bodyParser.json({
    limit: "5kb",
  })
);
app.use(cors())

app.use("/api/invoice", invoice);
app.get("/", (req: Request, res: Response) => {
  res.status(200).send("API is running...");
});

if (process.env.NODE_ENV === "development") {
  app.use((req: Request, res: Response, next) => {
    const body =
      req.method === "GET"
        ? "Body not supported for GET"
        : JSON.stringify(req.body, null, 2);

    debug(`${req.method}\n${body}`);
    next();
  });
}

export { app };
