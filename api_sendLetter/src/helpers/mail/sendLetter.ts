import { mailgunAuth, getMailOptions } from "./mailConfig";
const nodemailer = require("nodemailer");
const mg = require("nodemailer-mailgun-transport");
const fs = require("fs");

export const sendLetter = (email: string, number: number) => {
  const smtpTransport = nodemailer.createTransport(mg(mailgunAuth));
  return new Promise((resolve, reject) => {
    smtpTransport.sendMail(
      getMailOptions(email, number),
      function (error, response) {
        if (error) {
          return reject(error);
        }
        console.log("Successfully sent email.");
        fs.unlink(`./uploads/${number}.pdf`, (err) => {
          if (err) {
            reject(err);
          }
          resolve(response);
        });
      }
    );
  });
};
