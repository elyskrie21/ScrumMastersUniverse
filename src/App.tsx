import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./pages/Root";
import { Training } from "./pages/Training";
import { CourseSchedule } from "./pages/CourseSchedule";
import { Contact } from "./pages/Contact";

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
      element: <CourseSchedule />,
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

export default App;
