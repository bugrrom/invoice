export const invoice = {
  type: "object",
  properties: {
    email: {
      type: "string",
      minLength: 5,
    },
    listOfWorks: {
      type: "array",
      items: {
        title: "listOfWork",
        type: "object",
        properties: {
          price: {
            type: "number",
          },
          project: {
            type: "string",
          },
        },
        required: ["price", "project"],
      },
    },
  },
  required: ["email", "listOfWorks"],
  additionalProperties: false,
};
