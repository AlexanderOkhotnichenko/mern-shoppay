import { Navigate, Route, Routes } from "react-router-dom";
import { Cookies } from "react-cookie";
import { SignUp } from "./components/SignUp";
import { Login } from "./components/Login";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ShopPage } from "./pages/ShopPage";
import { ContactPage } from "./pages/ContactPage";
import { ProductPage } from "./pages/ProductPage";
import { CartPage } from "./pages/CartPage";
import { NoResult } from "./components/NoResult";

export function routers() {
  const cookies = new Cookies();
  const user = cookies.get("token");

  return (
    <Routes>
      {user && <Route path='/signup' exact element={<Navigate to="/" />} />}
      {user && <Route path='/login' exact element={<Navigate to="/" />} />}
      {!user && <Route path='/basket' exact element={<Navigate to="/" />} />}
      <Route path={"/signup"} exact element={<SignUp />} />
      <Route path={"/login"} exact element={<Login />} />
      <Route path={"/"} exact element={<HomePage />} />
      <Route path={"/about"} exact element={<AboutPage />} />
      <Route path={"/shop"} exact element={<ShopPage />} />
      <Route path={"/contact"} exact element={<ContactPage />} />
      <Route path={"/shop/products/item/:id"} exact element={<ProductPage />} />
      <Route path={"/basket"} exact element={<CartPage />} />
      <Route path={"*"} exact element={<NoResult />} />
    </Routes>
  );
}
