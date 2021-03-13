import * as mongoose from "mongoose";

const { Schema, model } = mongoose;

type listOfWorks = {
  price: number;
  project: string;
};

export type typeInvoiceLog = mongoose.Document & {
  email: string;
  listOfWorks: listOfWorks[];
  createdAt: string;
};

const listOfWork: mongoose.Schema = new Schema({
  price: {
    type: Number,
    required: true,
  },
  project: {
    type: String,
    required: true,
  },
});

const InvoiceLogSchema: mongoose.Schema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    listOfWorks: [listOfWork],
  },
  {
    timestamps: true,
  }
);

export const InvoiceLog = model<typeInvoiceLog>("InvoiceLog", InvoiceLogSchema);
