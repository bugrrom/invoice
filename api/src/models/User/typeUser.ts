import { Model } from "sequelize";

export type typeUser = Model & {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  emailCompany: string;
  addressCompany: string;
  nameCompany: string;
};
