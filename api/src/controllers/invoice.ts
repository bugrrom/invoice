import dg from "debug";
import { Request, Response } from "express";
import { createInvoiceLog } from "../services/invoiceLog/invoiceLogServices";
import { getUserByEmail } from "../services/user/userServices";
import { generatePdf } from "../services/generateServices/generateServices";

const debug = dg("router:invoice");
const debugError = dg("router:invoice:debug");

export const getInvoice = async (req: Request, res: Response) => {
  debug(`${req.method} - ${req.originalUrl}`);

  try {
    const { email, listOfWorks } = req.body;
    const logData = await createInvoiceLog({ email, listOfWorks });
    const user = await getUserByEmail({ email });
    await generatePdf(logData, user);
    res.status(200).json(email);
  } catch (error) {
    res.status(400).json();
    debugError(`Error in getInvoice: ${error.message}`);
  }
};
