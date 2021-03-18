import * as express from "express";
import { validator } from "../helpers";
import { invoice } from "../schema";
import { getInvoice } from "../controllers";

export const router = express.Router();

router.post("/", [validator(invoice)], getInvoice);

export default router;
