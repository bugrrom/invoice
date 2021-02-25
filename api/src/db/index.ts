import * as mongoose from "mongoose";
import dg from "debug";
import { getDbName, getDbUrl } from "../helpers";

const debug = dg("db");
const DB_NAME = getDbName();
const DB_URL = getDbUrl();

const mongooseOptions = {
  promiseLibrary: global.Promise,
  poolSize: 10,
  keepAlive: 30000,
  connectTimeoutMS: 5000,
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
};

// @ts-ignore
const connection = mongoose.connect(`${DB_URL}`, mongooseOptions);

connection
  .then(() => {
    debug(`DB '${DB_NAME}' connected`);
  })
  .catch(({ message }) => {
    debug(`DB ${DB_NAME} connectionError: ${message}`);
  });
