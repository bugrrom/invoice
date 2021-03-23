import dg from "debug";
import { User } from "../../models";
import { typeUser } from "./typeUser";

const debugError = dg("services:user:debug");

export const getUserByEmail = async (mail: {
  email: string;
}): Promise<typeUser> => {
  try {
    const data = await User.findOne({ where: mail, raw: true });
    const {
      firstName,
      lastName,
      email,
      nameCompany,
      emailCompany,
      addressCompany,
    } = data;
    const newData = {
      firstName,
      lastName,
      email,
      company: {
        email: nameCompany,
        name: emailCompany,
        address: addressCompany,
      },
    };
    return newData;
  } catch (error) {
    debugError(`Error user services: ${error.message}`);
  }
};
