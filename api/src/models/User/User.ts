import Sequelize from "sequelize";
import { sequelize } from "../../db";
import { typeUser } from "./typeUser";

export const User = sequelize.define<typeUser>(
  "user",
  {
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    firstName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    emailCompany: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    nameCompany: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    addressCompany: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  { freezeTableName: true }
);
