import { InvoiceLog } from "../../models";
import {
  typeInvoiceLogController,
  typeReturnInvoiceLog,
} from "./typeInvoiceLog";

export class InvoiceLogControllers {
  async createInvoiceLog({
    email,
    listOfWorks,
  }: typeInvoiceLogController): Promise<typeReturnInvoiceLog> {
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
      throw error;
    }
  }
}
