import { queueGeneratePdf } from "../../helpers";

export class GenerationControllers {
  async generatePdf(log, user): Promise<void> {
    const allPrice = log.listOfWorks.reduce(
      (prev, price) => prev + price.price,
      0
    );
    const customer = {
      firstName: user.firstName,
      lastName: user.lastName,
      date: log.createdAt.toString(),
      email: user.email,
      company: user.company,
      price: allPrice,
      number: log.number,
      listOfWorks: log.listOfWorks,
    };
    await queueGeneratePdf.add("pdf", {
      customer,
    });
  }
}
