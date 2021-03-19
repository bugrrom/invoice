import dg from "debug";
import { Request, Response } from "express";
import { loggingAnInvoice } from "../services/invoiceLog/loggingAnInvoice";
import { getUserByEmail } from "../services/user/userServices";
import { generatePdf } from "../services/generateServices/generateServices";

const debug = dg("controller:invoice");
const debugError = dg("controller:invoice:debug");

export const getInvoice = async (req: Request, res: Response) => {
  debug(`${req.method} - ${req.originalUrl}`);

  try {
    const { email, listOfWorks } = req.body;
    const logData = await loggingAnInvoice({ email, listOfWorks });
    const user = await getUserByEmail({ email });
    await generatePdf(logData, user);
    res.status(200).json(email);
  } catch (error) {
    res.status(400).json();
    debugError(`Error in getInvoice: ${error.message}`);
  }
};
