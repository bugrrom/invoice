import { Subscriber } from "../../helpers/subscribers/subscriber";
import { queueGeneratePdfAndLetter } from "../../helpers/queue/queue";

export class GenerationControllers {
  async generatePdfAndSendLetter(data, log): Promise<void> {
    await queueGeneratePdfAndLetter.add("pdf", { message: "pdf" });
    await queueGeneratePdfAndLetter.add("send", { message: "send" });
    const allPrice = log.listOfWorks.reduce(
      (prev, price) => prev + price.price,
      0
    );
    const customer = {
      firstName: data.firstName,
      lastName: data.lastName,
      date: log.createdAt.toString(),
      email: data.email,
      company: data.company,
      price: allPrice,
      number: log.number,
      listOfWorks: log.listOfWorks,
    };
    const sub = new Subscriber({ serviceName: "FIFO" });
    await sub.workerCreatePdfAndSendLetter(customer);
  }
}
