import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";

import AdminLayout from "./admin/AdminLayout";
import ProjectList from "./admin/pages/ProjectList";
import SkillList from "./admin/pages/SkillList";
import ExperienceList from "./admin/pages/ExperienceList";
import ProtectedRoute from "./admin/auth/ProtectedRoute";
import AdminLogin from "./admin/auth/AdminLogin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<AdminLogin />} />
        {/* Admin */}
        <Route path="/admin" element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }>
          <Route path="projects" element={<ProjectList />} />
          <Route path="skills" element={<SkillList />} />
          <Route path="experience" element={<ExperienceList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;