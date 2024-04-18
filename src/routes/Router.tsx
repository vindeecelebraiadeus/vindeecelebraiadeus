import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/homePage/HomePage";
import { Container } from "../commonComponents/Container";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Container />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        index: true,
      },
    ],
  },
]);
