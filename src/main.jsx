import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Home from "./components/Home/Home";
import Dashbord from "./components/Dashboard/Dashbord";
import BookDetail from "./components/BookDetail/BookDetail";
import ListedBooks from "./components/ListedBooks/ListedBooks";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginPage from "./components/Login/LoginPage";
import { HelmetProvider } from "react-helmet-async";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "books/:bookId",
        element: <BookDetail></BookDetail>,
        loader: () => fetch("./booksData.json"),
      },
      {
        path: "/listedBooks",
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch("./booksData.json"),
      },
      {
        path: "/dashborad",
        element: <Dashbord></Dashbord>,
        loader: () => fetch("./booksData.json"),
      },
      {
        path: "/login",
        element: <LoginPage></LoginPage>,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </HelmetProvider>
  </StrictMode>
);
