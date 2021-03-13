import { Worker } from "bullmq";
import { createPdf } from "../createPdf/createPdf";
import { sendMassage } from "../mail/sendMassage";
import { connection } from "../redis connected";
import { queueGeneratePdfAndLetter } from "../queue/queue";

export const workerCreatePdfAndSendLetter = async (customer) => {
  try {
    await new Worker(
      "FIFO",
      async (message) => {
        if (message.name === "pdf") {
          await createPdf(customer);
        } else if (message.name === "send") {
          await sendMassage(customer.email, customer.number);
        }
      },
      { connection }
    );
  } catch (e) {
    throw e;
  }
};

export const workerRequest = async () => {
  try {
    await new Worker("request", async ({data}) => {
        await queueGeneratePdfAndLetter.add("pdf", { message: "pdf" });
        await queueGeneratePdfAndLetter.add("send", { message: "send" });
        await workerCreatePdfAndSendLetter(data.customer);
    }, { connection });
  } catch (e) {
    throw e;
  }
};
