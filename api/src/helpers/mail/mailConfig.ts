const path = require("path");
const fs = require("fs");
const handlebars = require("handlebars");
const emailTemplateSource = fs.readFileSync(
  path.join(__dirname, "../templates/templateLatter.hbs"),
  "utf8"
);

export const mailgunAuth = {
  auth: {
    api_key: process.env.API_KEY_MAILGAN,
    domain: process.env.DOMAIN_MAILGAN,
  },
};

const template = handlebars.compile(emailTemplateSource);

const htmlToSend = template({ message: "Hello!" });

export const mailOptions = {
  from: "myemail@example.com",
  to: process.env.EMAIL,
  subject: "EMAIL SUBJECT LINE",
  html: htmlToSend,
  attachments: [
    { filename: "index.pdf", path: path.join("./uploads/index.pdf") },
  ],
};
