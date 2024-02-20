import { createServer, Model } from "miragejs";

export const setupRegister = () => {
  createServer({
    models: {
      user: Model,
    },

    routes() {
      this.namespace = "/api";

      this.post("/user/register", (schema, request) => {
        const data = JSON.parse(request.requestBody);
        return schema.users.create(data);
      });
    },
  });
};
