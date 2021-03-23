import { Queue, QueueEvents } from "bullmq";
import { connection } from "./redis";
export const queueGeneratePdf = new Queue("createPdf", { connection });
export const queueGeneratePdfEvents = new QueueEvents("createPdf", {
  connection,
});
export const queueGenerateLetterAndSend = new Queue("createLetterAndSend", {
  connection,
});
