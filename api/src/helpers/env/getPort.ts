import { ValidationError } from "../errors";

export const getPort = () => {
  const port = process.env.PORT || 3000;
  if (!port) {
    throw new ValidationError("Environment variable PORT should be specified");
  }

  return port;
};
