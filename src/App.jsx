import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";

import Home from "./assets/pages/Home";
import Books from "./assets/pages/Books";
import About from "./assets/pages/About";
import Login from "./assets/pages/Login";
import Register from "./assets/pages/Register";
import Profile from "./assets/pages/Profile";
import ForgetPassword from "./assets/pages/forgetPassword";
import ResetPassword from "./assets/pages/resetPassword";
import CreateNewPassword from "./assets/pages/createNewPassword";
import BookDetails from "./assets/pages/BookDetails";
import CartPage from "./assets/pages/Cart";
import Wishlist from "./assets/pages/wishlist";
import CheckOut from './assets/pages/checkout'
import OrderHistory from './assets/pages/orderHistory'
export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: false,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header variant="home" />
              <Home />
              <Footer />
            </>
          }
        />

        <Route
          path="/about"
          element={
            <>
              <Header variant="about" />
              <About />
              <Footer />
            </>
          }
        />

        <Route path="/books" element={<Books />} />

        <Route
          path="/BookDetails"
          element={
            <>
              <Header variant="books" />
              <BookDetails />
            </>
          }
        />

        <Route
          path="/Cart"
          element={
            <>
              <Header variant="books" />
              <CartPage />
            </>
          }
        />

        <Route
          path="/wishlist"
          element={
            <>
              <Header variant="books" />
              <Wishlist />
            </>
          }
        />
        <Route
          path="/checkout"
          element={
            <>
              <Header variant="books" />
              <CheckOut />
            </>
          }
        />
        <Route
          path="/OrderHistory"
          element={
            <>
              <Header variant="books" />
              <OrderHistory />
            </>
          }
        />

        <Route
          path="/login"
          element={
            <>
              <Header variant="login" />
              <Login />
            </>
          }
        />

        <Route
          path="/register"
          element={
            <>
              <Header variant="login" />
              <Register />
            </>
          }
        />

        <Route
          path="/forgetPassword"
          element={
            <>
              <Header variant="login" />
              <ForgetPassword />
            </>
          }
        />

        <Route
          path="/resetPassword"
          element={
            <>
              <Header variant="login" />
              <ResetPassword />
            </>
          }
        />

        <Route
          path="/createNewPassword"
          element={
            <>
              <Header variant="login" />
              <CreateNewPassword />
            </>
          }
        />

        <Route
          path="/profile"
          element={
            <>
              <Header variant="profile" />
              <Profile />
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
