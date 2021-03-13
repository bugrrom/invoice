import { Queue } from "bullmq";
import { connection } from "../redis connected";

export const queueGeneratePdfAndLetter = new Queue("FIFO", { connection });
export const queueIncomingRequests = new Queue("request", { connection });
