import { createServer, Model } from "miragejs";

export const setupServer = ({ environment = "development" } = {}) => {
  let server = createServer({
    environment,
    models: {
      users: Model,
      registerUser: Model,
    },

    routes() {
      this.namespace = "/api";

      this.get("/user/register", (schema) => {
        return schema.users.all();
      });

      this.post("/user/register", (schema, request) => {
        const data = JSON.parse(request.requestBody);
        const user = schema.users.create(data);

        return user;
      });
    },
  });

  return server;
};
