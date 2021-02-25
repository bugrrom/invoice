import { mailgunAuth, mailOptions } from "./mailConfig";
const nodemailer = require("nodemailer");
const mg = require("nodemailer-mailgun-transport");

export const sendMassage = async () => {
  const smtpTransport = nodemailer.createTransport(mg(mailgunAuth));

  await smtpTransport.sendMail(mailOptions, function (error, response) {
    if (error) {
      console.log(error);
    } else {
      console.log("Successfully sent email.");
    }
  });
};
