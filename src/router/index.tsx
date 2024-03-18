import App from "@/App";
import { Outlet, createBrowserRouter } from "react-router-dom";
import News from "@/pages/news/News"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "news",
        element:  <News />,
      },
    ],
  },
]);
