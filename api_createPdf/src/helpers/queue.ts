import { Queue } from "bullmq";
import { connection } from "./redis";

export const queueGenerateLetterAndSend = new Queue("createLetterAndSend", {
  connection,
});
