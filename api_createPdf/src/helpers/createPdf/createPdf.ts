import * as path from "path";
import * as fs from "fs";
import handlebars from "handlebars";
import dg from "debug";

const debug = dg("createPdf");

const html = fs.readFileSync(
  path.join(__dirname, "../../templates/templatePdf.hbs"),
  "utf8"
);

const puppeteer = require("puppeteer");

type typeProps = {
  firstName: string;
  lastName: string;
  email: string;
  date: string;
  company: {
    name: string;
    email: string;
    address: string;
  };
  price: number;
  number: number;
  listOfWorks: { price: number; project: string }[];
};

export const createPdf = async ({
  firstName,
  email,
  company,
  lastName,
  date,
  price,
  number,
  listOfWorks,
}: typeProps) => {
  try {
    const template = await handlebars.compile(html);
    const dateTransform = new Date(date);
    const createNewDate = [
      dateTransform.getDate(),
      dateTransform.getMonth() + 1,
      dateTransform.getFullYear(),
    ];
    const htmlToSend = template({
      firstName,
      email,
      lastName,
      date: createNewDate.join(" "),
      nameCompany: company.name,
      emailCompany: company.email,
      addressCompany: company.address,
      price,
      number: number,
      tax: 0,
      listOfWorks: JSON.parse(JSON.stringify(listOfWorks)),
    });
    // using the chrome process in docker container
    const browser = await puppeteer.launch({
      executablePath: process.env.CHROMIUM_PATH,
      args: ["--no-sandbox"],
    });
    const page = await browser.newPage();
    await page.setContent(htmlToSend);
    await page.pdf({ path: `./uploads/${number}.pdf`, format: "A4" });
    await browser.close();
    debug("PDF Generated");
  } catch (e) {
    debug(`Error ${e.message}`);
  }
};
