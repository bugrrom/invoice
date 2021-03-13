import { mailgunAuth, getMailOptions } from "./mailConfig";
const nodemailer = require("nodemailer");
const mg = require("nodemailer-mailgun-transport");
const fs = require("fs");

export const sendMassage = async (email: string, number: number) => {
  const smtpTransport = nodemailer.createTransport(mg(mailgunAuth));

  await smtpTransport.sendMail(
    getMailOptions(email, number),
    function (error, response) {
      if (error) {
        console.log(error);
      } else {
        console.log("Successfully sent email.");
        fs.unlink(`./uploads/${number}.pdf`, (err) => {
          if (err) console.log(err);
        });
      }
    }
  );
};
