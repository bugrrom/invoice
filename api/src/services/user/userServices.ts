import dg from "debug";
import { typeUser, User } from "../../models";

const debugError = dg("router:invoice:debug");

export const getUserByEmail = async (email: {
  email: string;
}): Promise<typeUser> => {
  try {
    const data = await User.findOne(email);
    return data;
  } catch (error) {
    debugError(`Error user services: ${error.message}`);
  }
};
