import Layouts from "../components/Layouts/Layouts";
import Admin from "../pages/admin/Admin";
import Category from "../pages/admin/pages/category/Category";
import Overview from "../pages/admin/pages/overview/Overview";
import Post from "../pages/admin/pages/post/Post";
import Settings from "../pages/admin/pages/settings/Settings";

const privateRoute = [
  {
    element: <Layouts />,
    children: [
      {
        path: "/admin",
        element: <Admin />,
        children: [
          {
            path: "overview",
            element: <Overview />,
          },
          {
            path: "post",
            element: <Post />,
          },
          {
            path: "category",
            element: <Category />,
          },
          {
            path: "settings",
            element: <Settings />,
          },
        ],
      },
    ],
  },
];

export default privateRoute;
