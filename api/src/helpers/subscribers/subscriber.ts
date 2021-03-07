import { Worker } from "bullmq";
import { createPdf } from "../createPdf/createPdf";
import { sendMassage } from "../mail/sendMassage";
import { connection } from "../redis connected";

export class Subscriber {
  private readonly serviceName: string;
  private listenerName: string;
  constructor(options: { serviceName: string; listenerName?: string }) {
    this.serviceName = options.serviceName;
    this.listenerName = options.listenerName;
  }
  async workerCreatePdfAndSendLetter(customer) {
    try {
      await new Worker(
        this.serviceName,
        async (massage) => {
          if (massage.name === "pdf") {
            await createPdf(customer);
          } else if (massage.name === "send") {
            await sendMassage(customer.email);
          }
        },
        { connection }
      );
    } catch (e) {
      throw e;
    }
  }
}
