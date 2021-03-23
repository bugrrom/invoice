import "../config";
import "../db";
import { User } from "../models";

export const initializingDatabase = () => {
  User.create({
    email: "bugrom@mail.ru",
    firstName: "Tom",
    lastName: "Hard",
    emailCompany: "google.com",
    addressCompany: "Address st",
    nameCompany: "Google",
  })
    .then(() => console.log("data add"))
    .catch((e) => console.log("Error", e));
};

initializingDatabase();
