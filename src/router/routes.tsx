import AdminLayout from "@/pages/admin/AdminLayout";
import DashboardCategoryPage from "@/pages/admin/dashoboard/DashboardCategoryPage";
import DashboardPage from "@/pages/admin/dashoboard/DashboardPage";
import SettingManagePage from "@/pages/admin/dashoboard/SettingManagePage";

import AuthRootLayout from "@/pages/auth/AuthRootLayout";
import LoginPage from "@/pages/auth/LoginPage";
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
import DashboardArticlePage from "@/pages/admin/dashoboard/DashboardArticlePage";
import SettingUserPage from "@/pages/admin/dashoboard/SettingUserPage";
import CreateArticlePage from "@/pages/admin/dashoboard/CreateArticlePage";
import CreateCategoryPage from "@/pages/admin/dashoboard/CreateCategoryPage";
import ProfilePage from "@/pages/client/ProfilePage";

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
      {
        path: "/profile",
        Component: ProfilePage,
      },
    ],
  },
  //Auth Routes
  {
    path: "/login",
    Component: AuthRootLayout,
    children: [
      {
        index: true,
        Component: LoginPage,
      },
    ],
  },

  //Admin Routes
  {
    path: "/dashboard",
    Component: AdminLayout,
    children: [
      {
        index: true,
        Component: DashboardPage,
      },
      {
        path: "categories",
        Component: DashboardCategoryPage,
      },
      {
        path: "articles",
        Component: DashboardArticlePage,
      },
      {
        path: "createArticle",
        Component: CreateArticlePage,
      },
      {
        path: "createCategory",
        Component: CreateCategoryPage,
      },
      {
        path: "manage",
        Component: SettingManagePage,
      },
      {
        path: "users",
        Component: SettingUserPage,
      },
    ],
  },
]);

export default router;
