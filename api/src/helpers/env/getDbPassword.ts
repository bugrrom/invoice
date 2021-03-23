import { ValidationError } from "../errors";

export const getDbPassword = () => {
  const password = process.env.PASSWORD || "123456789";
  if (!password) {
    throw new ValidationError(
      "Environment variable PASSWORD should be specified"
    );
  }

  return password;
};
