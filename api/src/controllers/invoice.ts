import dg from "debug";
import { Request, Response } from "express";
import { loggingAnInvoice } from "../services";
import { getUserByEmail } from "../services";
import { generatePdf } from "../services";

const debug = dg("controller:invoice");
const debugError = dg("controller:invoice:debug");

export const getInvoice = async (req: Request, res: Response) => {
  debug(`${req.method} - ${req.originalUrl}`);

  try {
    const { email, listOfWorks } = req.body;
    const logData = await loggingAnInvoice({ email, listOfWorks });
    const user = await getUserByEmail({ email });
    generatePdf(logData, user);
    res.status(200).json({user, logData});
  } catch (error) {
    res.status(400).json();
    debugError(`Error in getInvoice: ${error.message}`);
  }
};
