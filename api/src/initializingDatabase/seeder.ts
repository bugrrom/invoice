import "../config";
import "../db";
import { User } from "../models";

import { users } from "./users";

const importData = async () => {
  try {
    await User.deleteMany();

    await User.insertMany(users);

    console.log("data Imported");
    process.exit();
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
};
importData();
