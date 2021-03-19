import dg from "debug";
import * as nodemailer from "nodemailer";
import * as mg from "nodemailer-mailgun-transport";
import * as fs from "fs";
import { mailgunAuth, getMailOptions } from "./mailConfig";

const debug = dg("sendMail");

export const sendEmail = (email: string, number: number) => {
  const mailganConf = mg(mailgunAuth);
  const smtpTransport = nodemailer.createTransport(mailganConf);
  return new Promise((resolve, reject) => {
    smtpTransport.sendMail(
      getMailOptions(email, number),
      function (error, response) {
        if (error) {
          return reject(error);
        }
        debug("Successfully sent email.");
        fs.unlink(`./uploads/${number}.pdf`, (err) => {
          if (err) {
            reject(err);
            debug(`Error remove file: ${err}`);
          }
          resolve(response);
          debug("file remove");
        });
      }
    );
  });
};
