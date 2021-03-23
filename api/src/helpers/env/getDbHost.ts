import { ValidationError } from "../errors";

export const getDbHost = () => {
  const host = process.env.HOST || "localhost";
  if (!host) {
    throw new ValidationError("Environment variable HOST should be specified");
  }

  return host;
};
