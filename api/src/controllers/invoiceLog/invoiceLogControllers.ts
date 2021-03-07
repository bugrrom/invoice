import { InvoiceLog, IInvoiceLog } from "../../models";
import { typeInvoiceLog, typeReturnInvoiceLog } from "./typeInvoiceLog";

export const InvoiceLogControllers = {
  createInvoiceLog: async ({
    email,
    listOfWorks,
  }: typeInvoiceLog): Promise<typeReturnInvoiceLog> => {
    return InvoiceLog.create({ email, listOfWorks })
      .then(async (data: IInvoiceLog) => {
        const number = await InvoiceLog.find().countDocuments();
        const newData = {
          number,
          email: data.email,
          listOfWorks: data.listOfWorks,
          createdAt: data.createdAt,
        };
        return newData;
      })
      .catch((error: Error) => {
        throw error;
      });
  },
};
