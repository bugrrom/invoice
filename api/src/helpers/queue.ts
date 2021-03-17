import { Queue } from "bullmq";
import { connection } from "./redis";

export const queueGeneratePdf = new Queue("createPdf", { connection });
