import dg from "debug";
import {
  typeInvoiceLogController,
  typeReturnInvoiceLog,
} from "./typeInvoiceLog";
import { InvoiceLog } from "../../models";

const debugError = dg("services:invoiceLog:debug");

export const loggingAnInvoice = async ({
  email,
  listOfWorks,
}: typeInvoiceLogController): Promise<typeReturnInvoiceLog> => {
  try {
    const data = await InvoiceLog.create({ email, listOfWorks });
    const number = await InvoiceLog.find().countDocuments();
    const newData = {
      number,
      email: data.email,
      listOfWorks: data.listOfWorks,
      createdAt: data.createdAt,
    };
    return newData;
  } catch (error) {
    debugError(`Error invoiceLog services: ${error.message} `);
  }
};
