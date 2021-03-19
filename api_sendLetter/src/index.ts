import "./config";
import dg from "debug";
import { Worker } from "bullmq";
import { connection, sendEmail } from "./helpers";

const debug = dg("server: worker send email");

const sendEmailWorker = new Worker(
  "createLetterAndSend",
  async (data) => {
    debug("init");
    sendEmail(data.data.email, data.data.number);
  },
  { connection }
);

sendEmailWorker.on("failed", (data) => {
  debug(`Error ${data.error}`);
});
