import { queueGeneratePdf } from "../../helpers";
import { typeReturnInvoiceLog } from "../invoiceLog/typeInvoiceLog";
import { typeUser } from "../../models";

export const generatePdf = async (
  log: typeReturnInvoiceLog,
  user: typeUser
): Promise<void> => {
  const allPrice = log.listOfWorks.reduce(
    (prev, price) => prev + price.price,
    0
  );
  const customer = {
    firstName: user.firstName,
    lastName: user.lastName,
    date: log.createdAt.toString(),
    email: user.email,
    company: user.company,
    price: allPrice,
    number: log.number,
    listOfWorks: log.listOfWorks,
  };
  await queueGeneratePdf.add("pdf", {
    customer,
  });
};
