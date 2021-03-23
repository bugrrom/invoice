import dg from "debug";
import { Job } from "bullmq";
import { queueGeneratePdf } from "../../helpers";
import { typeReturnInvoiceLog } from "..";
import { queueGeneratePdfEvents } from "../../helpers";
import { queueGenerateLetterAndSend } from "../../helpers";
import { typeUser } from "../user/typeUser";

const debugError = dg("services:invoice:debug");

export const generatePdf = (
  log: typeReturnInvoiceLog,
  user: typeUser
): void => {
  try {
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
    queueGeneratePdf.add("pdf", {
      customer,
    });
    queueGeneratePdfEvents.on("completed", (data) => {
      Job.fromId(queueGeneratePdf, data.jobId).then((data) => {
        queueGenerateLetterAndSend.add("send", {
          email: data.data.customer.email,
          number: data.data.customer.number,
        });
      });
    });
  } catch (error) {
    debugError(`Error generate services: ${error.message}`);
  }
};
