import App from "@/App";
import { Outlet, createBrowserRouter } from "react-router-dom";
import News from "@/pages/news/News"
import { Settings } from "@/pages/settings/Settings";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "news",
        element:  <News />,
      },
      {
        path: "settings",
        element:  <Settings />,
      },
    ],
  },
]);
