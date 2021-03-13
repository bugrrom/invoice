import { typeInvoiceLog } from "../../models";

export type typeInvoiceLogController = {
  email: typeInvoiceLog["email"];
  listOfWorks: typeInvoiceLog["listOfWorks"];
};

export type typeReturnInvoiceLog = {
  email: typeInvoiceLog["email"];
  listOfWorks: typeInvoiceLog["listOfWorks"];
  number: number;
  createdAt: string;
};
