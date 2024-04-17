import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Blogs from "../pages/Blogs";
import Bookmarks from "../pages/Bookmarks";
import Blog from "../components/Blog";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
        loader: () => fetch("https://dev.to/api/articles?per_page=20&top=7"),
      },
      {
        path: "/bookmarks",
        element: <Bookmarks></Bookmarks>,
      },
      {
        path: "/blog/:id",
        element: <Blog></Blog>,
        loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.id}`),
      },
    ],
  },
]);
