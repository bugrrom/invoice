import { mailgunAuth, getMailOptions } from "./mailConfig";
const nodemailer = require("nodemailer");
const mg = require("nodemailer-mailgun-transport");
const fs = require("fs");

export const sendMassage = async (email: string) => {
  const smtpTransport = nodemailer.createTransport(mg(mailgunAuth));

  await smtpTransport.sendMail(
    getMailOptions(email),
    function (error, response) {
      if (error) {
        console.log(error);
      } else {
        console.log("Successfully sent email.");
        fs.unlink(`./uploads/${email}.pdf`, (err) => {
          if (err) console.log(err);
        });
      }
    }
  );
};
