import { typeUser, User } from "../../models";

export const getUserByEmail = async (email: {
  email: string;
}): Promise<typeUser> => {
  try {
    const data = await User.findOne(email);
    return data;
  } catch (error) {
    throw error;
  }
};
