import * as express from "express";
import { getInvoice } from "./router";
import { validator } from "../../helpers";
import { invoice } from "../../schema";

export const router = express.Router();

router.post("/", [validator(invoice)], getInvoice);

export default router;
