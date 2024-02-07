import { createServer, Model } from "miragejs";

export const setupServer = ({ environment = "development" } = {}) => {
  let server = createServer({
    environment,
    models: {
      users: Model,
    },

    routes() {
      this.namespace = "/api";

      this.get("/user/register", (schema) => {
        return schema.users.all();
      });

      this.post("/user/register", (schema, request) => {
        const data = JSON.parse(request.requestBody);
        return schema.users.create(data);
      });

      this.get("/user/login", (schema) => {
        return schema.users.all;
      });
    },
  });

  return server;
};
