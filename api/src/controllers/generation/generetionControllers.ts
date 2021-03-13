import { workerRequest } from "../../helpers/subscribers/subscriber";
import {queueIncomingRequests} from "../../helpers/queue/queue";

export class GenerationControllers {
  async generatePdfAndSendLetter(data, log): Promise<void> {
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
    await queueIncomingRequests.add("request", { customer });
    await workerRequest();
  }
}
