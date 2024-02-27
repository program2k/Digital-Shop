import { createServer, Model } from "miragejs";
import { v4 as uuidv4 } from "uuid";

export const setupServer = () => {
  createServer({
    models: {
      user: Model,
    },

    routes() {
      this.namespace = "/api";

      this.post("/user/register", (schema, request) => {
        const userData = JSON.parse(request.requestBody);
        const newUser = schema.users.create(userData);

        const token = uuidv4();

        return { user: newUser, token };
      });

      this.post("/user/login", (schema, request) => {
        const { email, password } = JSON.parse(request.requestBody);
        const user = schema.users.findBy({ email });
        console.log("email", email);
        console.log("password", password);

        if (user && user.password === password) {
          return {
            user: {
              id: user.id,
              email: user.email,
              userName: user.userName,
            },
            token: user.token,
          };
        } else {
          return { error: "Invalid email or password" };
        }
      });
    },
  });
};
