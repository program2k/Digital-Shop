import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import { Contact } from "./pages/Contact";
import OurStore from "./pages/OurStore";
import Blog from "./pages/Blog";
import CompareProduct from "./pages/CompareProduct";
import Favourite from "./pages/Favourite";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import SignUp from "./pages/SignUp";
import ResetPassword from "./pages/ResetPassword";
import ViewProduct from "./pages/ViewProduct";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import { setupProduct } from "./fake-backend/products/config-products";
// import { setupUsers } from "./fake-backend/user/config-users";

if (process.env.NODE_ENV === "development") {
  setupProduct();
  // setupUsers();
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="product" element={<OurStore />} />
          <Route path="product/:id" element={<ViewProduct />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="blog" element={<Blog />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="compare-product" element={<CompareProduct />} />
          <Route path="favourite" element={<Favourite />} />
          <Route path="login" element={<Login />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="reset-password" element={<ResetPassword />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
