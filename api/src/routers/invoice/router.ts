import dg from "debug";
import { Request, Response } from "express";
//Controllers
import {
  GenerationControllers,
  InvoiceLogControllers,
  UserControllers,
} from "../../controllers";
//Initialized
const debug = dg("router:invoice");

export const getInvoice = async (req: Request, res: Response) => {
  debug(`${req.method} - ${req.originalUrl}`);

  try {
    const { email, listOfWorks } = req.body;
    const log = new InvoiceLogControllers();
    const logData = await log.createInvoiceLog({
      email,
      listOfWorks,
    });
    const data = new UserControllers();
    const user = await data.getUserByEmail({ email });
    const generate = new GenerationControllers();
    await generate.generatePdf(logData, user);
    res.status(200).json(email);
  } catch (e) {
    res.status(400);
  }
};
