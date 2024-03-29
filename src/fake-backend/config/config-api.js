import { createServer, Model, Factory } from "miragejs";
import { v4 as uuidv4 } from "uuid";
import { productData } from "./productData";

const allProducts = Factory.extend({
  id: () => uuidv4(),
});

export const setupServer = () => {
  createServer({
    models: {
      user: Model,
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

      this.post("/user/register", (schema, request) => {
        const userData = JSON.parse(request.requestBody);
        const newUser = schema.users.create(userData);

        const token = uuidv4();

        return { user: newUser, token };
      });

      this.post("/user/login", (schema, request) => {
        const { userName, password } = JSON.parse(request.requestBody);
        const user = schema.users.findBy({ userName });
        console.log(schema.users);

        if (user && user.password === password) {
          return {
            user: {
              id: user.id,
              email: user.email,
              userName: user.userName,
            },
            token: user.token,
          };
        }
      });

      this.get("/product", (schema) => {
        return schema.products.all();
      });

      this.get("/user/cart", (schema) => {
        return schema.cartItems.all();
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

        let { id, name, image, description, price, quantity, version } =
          requestData;

        let existingProduct = schema.products.findBy({ id });

        if (!existingProduct) {
          schema.products.create({
            id,
            name,
            image,
            description,
            price,
            quantity,
            version,
          });
        }

        let cartItem = {
          productId: id,
          name,
          image,
          description,
          price,
          quantity,
          version,
        };
        return schema.cartItems.create(cartItem);
      });

      this.put("/user/cart/:productId", (schema, request) => {
        let { productId, quantity } = JSON.parse(request.requestBody);

        let existingCartItem = schema.cartItems.findBy({ productId });

        if (!existingCartItem) {
          return { error: "Product not found in cart" };
        }

        existingCartItem.update({ quantity });

        return existingCartItem.attrs;
      });

      this.delete("/user/cart/:productId", (schema, request) => {
        const productId = request.params.productId;
        const product = schema.cartItems.findBy({ productId });

        if (!product) {
          return { error: "Product not found" };
        }

        product.destroy();

        const cartItems = schema.cartItems.all();

        return cartItems;
      });

      this.get("/products", (schema, request) => {
        const searchTerm = request.queryParams.name;
        if (searchTerm) {
          return schema.products.where((product) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
          );
        } else {
          return schema.products.all();
        }
      });
    },
  });
};
