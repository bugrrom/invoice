import { IInvoiceLog } from "../../models";

export type typeInvoiceLog = {
  email: IInvoiceLog["email"];
  listOfWorks: IInvoiceLog["listOfWorks"];
};

export type typeReturnInvoiceLog = {
  email: IInvoiceLog["email"];
  listOfWorks: IInvoiceLog["listOfWorks"];
  number: number;
  createdAt: string
};
