import { ValidationError } from "../errors";

export const getDbUser = () => {
  const user = process.env.USER || "postgres";
  if (!user) {
    throw new ValidationError("Environment variable USER should be specified");
  }

  return user;
};
