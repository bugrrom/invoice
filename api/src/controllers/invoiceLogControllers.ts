import { InvoiceLog, IInvoiceLog } from "../models";

type typeInvoiceLog = {
  email: IInvoiceLog["email"];
};

export const InvoiceLogControllers = {
  createInvoiceLog: async ({ email }: typeInvoiceLog): Promise<IInvoiceLog> => {
    return InvoiceLog.create({ email })
      .then((data: IInvoiceLog) => {
        return data;
      })
      .catch((error: Error) => {
        throw error;
      });
  },
};
