import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { ThemeProvider } from "./context/ThemeProvider";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={AppRouter} />
    </ThemeProvider>
  </React.StrictMode>
);
