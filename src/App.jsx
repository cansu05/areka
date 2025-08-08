import { createBrowserRouter, RouterProvider } from "react-router";
import ContactPage from "./pages/Contact";
import BlogPage from "./pages/Blog";
import HomePage from "./pages/Home";
import MainLayout from "./MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "blog",
        element: <BlogPage />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} className="text-amber-300" />;
};
export default App;
