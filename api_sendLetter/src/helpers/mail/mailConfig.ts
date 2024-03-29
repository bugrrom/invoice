import * as path from "path";
import * as fs from "fs";
import handlebars from "handlebars";

const emailTemplateSource = fs.readFileSync(
  path.join(__dirname, "../../templates/templateLatter.hbs"),
  "utf8"
);

export const mailgunAuth = {
  auth: {
    api_key: process.env.API_KEY_MAILGAN,
    domain: process.env.DOMAIN_MAILGAN,
  },
};

export const getMailOptions = (email: string, number: number) => {
  const template = handlebars.compile(emailTemplateSource);

  const htmlToSend = template({ message: "Hello!" });

  return {
    from: "myemail@example.com",
    to: email,
    subject: "EMAIL SUBJECT LINE",
    html: htmlToSend,
    attachments: [
      { filename: "index.pdf", path: path.join(`./uploads/${number}.pdf`) },
    ],
  };
};
