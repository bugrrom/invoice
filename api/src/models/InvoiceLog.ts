import * as mongoose from "mongoose";

const { Schema, model } = mongoose;

export interface IInvoiceLog extends mongoose.Document {
  email: string;
  createdAt: string;
}

const InvoiceLogSchema: mongoose.Schema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const InvoiceLog = model<IInvoiceLog>("InvoiceLog", InvoiceLogSchema);
