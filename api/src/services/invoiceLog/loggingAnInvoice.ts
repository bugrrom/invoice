import dg from "debug";
import {
  typeInvoiceLogController,
  typeReturnInvoiceLog,
} from "./typeInvoiceLog";
import { InvoiceLoggerUser, InvoiceLoggerWorkers } from "../../models";

const debugError = dg("services:invoiceLog:debug");

export const loggingAnInvoice = async ({
  email,
  listOfWorks,
}: typeInvoiceLogController): Promise<typeReturnInvoiceLog> => {
  try {
    const data = await InvoiceLoggerUser.create({ email }, { raw: true });
    const { id, createdAt } = data;
    for (const el of listOfWorks) {
      await InvoiceLoggerWorkers.create({
        // bulkCreate
        loggerUserId: id,
        project: el.project,
        price: el.price,
      });
    }
    const newData = {
      number: id,
      email,
      listOfWorks,
      createdAt,
    };
    return newData;
  } catch (error) {
    debugError(`Error invoiceLog services: ${error.message} `);
  }
};
