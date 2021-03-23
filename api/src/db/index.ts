import dg from "debug";
import { Sequelize } from "sequelize";
import { getDbUrl } from "../helpers/env";
const debug = dg("db");

const url = getDbUrl();

export const sequelize = new Sequelize(url);
sequelize
  .authenticate()
  .then(() => {
    console.log(sequelize.models);
    debug("Connection has been established successfully.");
  })
  .catch((err) => debug("Unable to connect to the database:", err));
sequelize.sync();
