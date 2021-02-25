import { User, IUser } from "../models";

type typeCreateUser = {
  email: IUser["email"];
  firstName: IUser["firstName"];
  lastName: IUser["lastName"];
  company: IUser["company"];
};

type getUserByEmail = {
  email: string;
};

export const UserControllers = {
  getUserByEmail: async (email: getUserByEmail): Promise<IUser> => {
    return User.findOne(email)
      .then((data: IUser) => {
        return data;
      })
      .catch((error: Error) => {
        throw error;
      });
  },
  createUser: async ({
    email,
    firstName,
    lastName,
    company,
  }: typeCreateUser): Promise<IUser> => {
    return User.create({
      email,
      firstName,
      lastName,
      company,
    })
      .then((data: IUser) => {
        return data;
      })
      .catch((error: Error) => {
        throw error;
      });
  },
};
