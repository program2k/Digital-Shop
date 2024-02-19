import { createServer, Model, Factory } from "miragejs";

export const setupLogin = () => {
  createServer({
    models: {
      user: Model,
    },

    factories: {
      user: Factory.extend({
        username: "admin",
        password: "Anhcanem13",
      }),
    },

    seeds(server) {
      server.create("user");
    },

    routes() {
      this.namespace = "/api";

      this.get("/user/login", (schema) => {
        return schema.users.all;
      });
    },
  });
};
