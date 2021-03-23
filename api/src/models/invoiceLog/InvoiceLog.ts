import Sequelize from "sequelize";
import { sequelize } from "../../db";
import { typeLoggerUser, typeLoggerWorkers } from "./typeInvoiceLog";

export const InvoiceLoggerUser = sequelize.define<typeLoggerUser>(
  "logger_user",
  {
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  { freezeTableName: true }
);

export const InvoiceLoggerWorkers = sequelize.define<typeLoggerWorkers>(
  "logger_workers",
  {
    project: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    price: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);

InvoiceLoggerUser.hasOne(InvoiceLoggerWorkers);
