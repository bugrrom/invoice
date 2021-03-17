import "./config";
import { Worker } from "bullmq";
import { connection } from "./helpers";
import { createPdf } from "./helpers";
import { queueGenerateLetterAndSend } from "./helpers";

new Worker(
  "createPdf",
  async (data) => {
    await createPdf(data.data.customer);
  },
  { connection }
).on("completed", (data) => {
  queueGenerateLetterAndSend.add("send", {
    email: data.data.customer.email,
    number: data.data.customer.number,
  });
});
