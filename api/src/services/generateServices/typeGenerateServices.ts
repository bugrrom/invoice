import { typeCompany, typeUser } from "../../models";

export type typeUserProps = {
  email: typeUser["email"];
  firstName: typeUser["firstName"];
  lastName: typeUser["lastName"];
  company: typeCompany[];
};
