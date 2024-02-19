import { createServer, Model, Factory } from "miragejs";
import { v4 as uuidv4 } from "uuid";
import image1 from "../image/apple.jpg";

export const setupProduct = () => {
  createServer({
    models: {
      product: Model,
      favorite: Model,
    },

    factories: {
      product: Factory.extend({
        id: () => uuidv4(),
        name: "SomeThing",
        title: "Apple Watch Series 9 GPS 41mm viền nhôm dây vải",
        description: "Apple Watch Series 9 GPS 41mm viền nhôm dây vải",
        type: "watch",
        tag: "watch",
        image: image1,
        color: "white",
        quantity: 5,
        rating: 4,
        price: 5000000,
      }),
    },

    seeds(server) {
      server.createList("product", 5);
    },

    routes() {
      this.namespace = "/api";

      this.get("/product", (schema) => {
        return schema.products.all();
      });

      this.post("/product/favourite", (schema, request) => {
        let requestBody = JSON.parse(request.requestBody);
        let productId = requestBody.productId;

        let product = schema.products.find(productId);

        if (!product) {
          return {
            error: "Product not found",
          };
        }

        schema.favorites.create({
          productId: productId,
        });

        return {
          message: "Product added to favorites successfully",
        };
      });
    },
  });
};
