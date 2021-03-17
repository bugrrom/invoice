import "./config";
import { Worker } from "bullmq";
import { connection } from "./helpers";
import { sendLetter } from "./helpers";

new Worker(
  "createLetterAndSend",
  (data) => sendLetter(data.data.email, data.data.number),
  { connection }
);
