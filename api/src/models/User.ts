import * as mongoose from "mongoose";

const { Schema, model } = mongoose;

export interface IUser extends mongoose.Document {
  email: string;
  firstName: string;
  lastName: string;
  company: {
    name: string;
    address: string;
    email: string;
  };
  createdAt?: string;
}

const UserSchema: mongoose.Schema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    company: {
      name: {
        type: String,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

export const User = model<IUser>("User", UserSchema);
