import dg from "debug";
import "./config";
import { Worker } from "bullmq";
import { connection, sendEmail } from "./helpers";

const debugError = dg("server: worker send email");

const sendEmailWorker = new Worker(
  "createLetterAndSend",
  (data) => sendEmail(data.data.email, data.data.number),
  { connection }
);

sendEmailWorker.on("failed", (data) => {
  debugError(`Error ${data.error}`);
});
