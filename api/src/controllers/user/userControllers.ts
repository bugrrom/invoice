import { User, IUser } from "../../models";
import { getUserByEmail } from "./typeUserControlers";

export class UserControllers {
  async getUserByEmail(email: getUserByEmail): Promise<IUser> {
    try {
      const data = await User.findOne(email);
      return data;
    } catch (error) {
      throw error;
    }
  }
}
