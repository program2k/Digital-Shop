import { createServer, Model, Factory } from "miragejs";
import { v4 as uuidv4 } from "uuid";
import iphone15 from "../image/iphone15_prm.jpg";
import image1 from "../image/apple.jpg";
import samsungS24 from "../image/samsungs24_ultra.jpg";
import { productData } from "./productData";

const allProducts = Factory.extend({
  id: () => uuidv4(),
});

export const setupProduct = () => {
  createServer({
    models: {
      product: Model,
      favorite: Model,
      cartItem: Model,
    },

    factories: {
      product: allProducts,
    },

    seeds(server) {
      const products = productData;

      const numberOfDuplicates = 2;

      products.forEach((product) => {
        for (let i = 0; i < numberOfDuplicates; i++) {
          server.create("product", product);
        }
      });
    },

    routes() {
      this.namespace = "/api";

      this.get("/product", (schema) => {
        return schema.products.all();
      });

      this.get("/user/favourite", (schema) => {
        return schema.favorites.all();
      });

      this.get("/products/:id", (schema, request) => {
        const productId = request.params.id;
        return schema.products.find(productId);
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

        return schema.favorites.create({
          productId: productId,
          name: product.name,
          title: product.description,
          price: product.price,
          type: product.type,
          image: product.image,
        });
      });

      this.delete("/user/favourite/:productId", (schema, request) => {
        const productId = request.params.productId;
        const favorite = schema.favorites.findBy({ productId });

        if (!favorite) {
          return { error: "Favorite product not found" };
        }

        favorite.destroy();

        const favorites = schema.favorites.all();

        return favorites;
      });

      this.post("/user/cart", (schema, request) => {
        let requestData = JSON.parse(request.requestBody);

        let { id, name, description, price, quantity, version } = requestData;

        let existingProduct = schema.products.findBy({ id });

        if (!existingProduct) {
          schema.products.create({
            id,
            name,
            description,
            price,
            quantity,
            version,
          });
        }

        let cartItem = {
          productId: id,
          name,
          description,
          price,
          quantity,
          version,
        };
        return schema.cartItems.create(cartItem);
      });
    },
  });
};
