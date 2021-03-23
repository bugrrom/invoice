import { Model } from "sequelize";

export type typeLoggerUser = Model & {
  id: number;
  email: string;
  createdAt: string;
};

export type typeLoggerWorkers = Model & {
  project: string;
  price: number;
};
