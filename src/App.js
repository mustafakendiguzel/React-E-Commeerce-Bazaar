import "./App.css";
import { Home } from "./pages/Home/Home";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Cart } from "./pages/cart/cart";
import { productsData } from "./api/Api";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import { Product } from "./pages/product/Product";
import { Login } from "./pages/login/Login";
import { AddProduct } from "./components/addProduct";
import { AddCategories } from "./components/addCategories";
import { Register } from "./pages/register/Register";

const Layout = () => {
  return (
    <div>
      <Header />
      <ScrollRestoration />
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: productsData,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/addProduct",
        element: <AddProduct />,
      },
      {
        path: "/addCategories",
        element: <AddCategories />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
