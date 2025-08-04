import AboutPage from "@/pages/client/AboutPage";
import ContactPage from "@/pages/client/ContactPage";
import HomePage from "@/pages/client/HomePage";
import NotFoundPage from "@/pages/client/NotFoundPage";
import RootLayout from "@/pages/client/RootLayout";
import BlogDetailPage from "@/pages/client/blog/BlogDetailPage";
import BlogRootLayout from "@/pages/client/blog/BlogRootLayout";
import BurmeseBlogPage from "@/pages/client/blog/BurmeseBlogPage";
import EnglishBlogPage from "@/pages/client/blog/EnglishBlogPage";
import VideoBlogPage from "@/pages/client/blog/VideoBlogPage";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "blog",
        Component: BlogRootLayout,
        children: [
          {
            path: "english",
            Component: EnglishBlogPage,
          },
          {
            path: "burmese",
            Component: BurmeseBlogPage,
          },
          {
            path: "video",
            Component: VideoBlogPage,
          },
          {
            path: "detail/:type/:id",
            Component: BlogDetailPage,
          },
        ],
      },
      {
        path: "/about",
        Component: AboutPage,
      },
      {
        path: "/contact",
        Component: ContactPage,
      },
    ],
  },
]);

export default router;
