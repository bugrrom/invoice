//Core
import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import { Request, Response, Application } from "express";
//Initialization
import "./db";
import { devModeLogs } from "./helpers";
//Routers
import invoice from "./routers/invoice";

const app: Application = express();

app.use(
  bodyParser.json({
    limit: "5kb",
  })
);
app.use(cors());
app.use(devModeLogs);

app.use("/api/invoice", invoice);
app.get("/", (req: Request, res: Response) => {
  res.status(200).send("API is running...");
});

export { app };
