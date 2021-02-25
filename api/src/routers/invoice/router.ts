import dg from "debug";
import { Request, Response } from "express";
import IORedis from "ioredis";
import { Queue, Worker } from "bullmq";
//Controllers
import { InvoiceLogControllers, UserControllers } from "../../controllers";
//Helpers
import { createPdf } from "../../helpers/createPdf/createPdf";
import { sendMassage } from "../../helpers/mail/sendMassage";
//Initialized
const debug = dg("router:invoice");
const connection = new IORedis(process.env.REDIS);
const queue = new Queue("FIFO", { connection });


export const getInvoice = async (req: Request, res: Response) => {
  debug(`${req.method} - ${req.originalUrl}`);

  try {
    await queue.add("pdf", { message: "pdf" });
    await queue.add("send", { message: "send" });
    const { email, listOfWorks } = req.body;
    const log = await InvoiceLogControllers.createInvoiceLog({ email });
    const user = await UserControllers.getUserByEmail({ email });
    await new Worker(
      "FIFO",
      async (w) => {
        if (w.name === "pdf") {
          const allPrice = listOfWorks.reduce(
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
          };
          await createPdf(customer);
        } else if (w.name === "send") {
          await sendMassage();
        }
      },
      { connection }
    );
    res.status(200).json(user);
  } catch (e) {
    res.status(400);
  }
};
