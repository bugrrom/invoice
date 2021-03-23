import { typeLoggerUser, typeLoggerWorkers } from "../../models";

export type typeInvoiceLogController = {
  email: typeLoggerUser["email"];
  listOfWorks: typeLoggerWorkers[];
};

export type typeReturnInvoiceLog = {
  email: typeLoggerUser["email"];
  listOfWorks: typeLoggerWorkers[];
  number: number;
  createdAt: string;
};
