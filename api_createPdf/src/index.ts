import "./config";
import dg from "debug";
import { Worker } from "bullmq";
import { connection } from "./helpers";
import { createPdf } from "./helpers";
import { queueGenerateLetterAndSend } from "./helpers";

const debug = dg("server: worker create pdf");

const createPdfWorker = new Worker(
  "createPdf",
  async (data) => {
    debug("init");
    const fooBar = data.data.customer;
    await createPdf(fooBar);
  },
  { connection }
);

createPdfWorker.on("failed", (data) => {
  debug(`Error ${data.error}`);
});
