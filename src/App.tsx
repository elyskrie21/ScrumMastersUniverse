import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./pages/Root";
import { Training } from "./pages/Training";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";
import { CourseSchedule } from "./pages/CourseSchedule";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
    },
    {
      path: "training",
      element: <Training />,
    },
    {
      path: "courses",
      element: <CourseSchedule />
    },
    {
      path: "about",
      element: <About />,
    },
    {
      path: "contact",
      element: <Contact />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App
