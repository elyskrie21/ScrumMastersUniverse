import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Root } from "./pages/Root";
import { Training } from "./pages/Training";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";
import { Wrapper } from "./components/common/Wrapper";
import { CourseSchedule } from "./pages/CourseSchedule";
import { Confirmation } from "./pages/Confirmation";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Wrapper>
          <Routes>
            <Route path="/" element={<Root />} />
            <Route path="training" element={<Training />} />
            <Route path="courses" element={<CourseSchedule />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="orderconfirm" element={<Confirmation />} />
          </Routes>
        </Wrapper>
      </BrowserRouter>
    </div>
  );
}

export default App;
