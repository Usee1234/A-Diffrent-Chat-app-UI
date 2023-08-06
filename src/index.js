import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import Home from "../Pages/Home";
import Chat2 from "./Componenets/Chat2";
import App from "./App";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

// import Messages from "./Componenets/Messages";
import Navbar from "./Componenets/Navbar";
const Applayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <App />
      },
      {
        path: "/chat",
        element: <Chat2 />
      }
    ]
  }
]);
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <RouterProvider router={router} fallbackElement={<App />} />
    {/* <App /> */}
  </StrictMode>
);
