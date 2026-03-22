import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";

import AdminLayout from "./admin/AdminLayout";
import ProjectList from "./admin/pages/ProjectList";
import SkillList from "./admin/pages/SkillList";
import ExperienceList from "./admin/pages/ExperienceList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route path="/" element={<Home />} />

        {/* Admin */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="projects" element={<ProjectList />} />
          <Route path="skills" element={<SkillList />} />
          <Route path="experience" element={<ExperienceList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;