import React from "react";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Root from "./pages/Root";
import SkillPage from "./pages/Skill";
import ContactPage from "./pages/ContactPage";
import Project from "./pages/Project";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/skill", element: <SkillPage /> },
      { path: "/project", element: <Project /> },
      { path: "/contact", element: <ContactPage /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
