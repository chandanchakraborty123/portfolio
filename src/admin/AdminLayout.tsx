import { Link, Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white min-h-screen p-4">
        <h2 className="text-xl mb-4">Admin</h2>

        <ul className="space-y-2">
          <li><Link to="/admin/projects">Projects</Link></li>
          <li><Link to="/admin/skills">Skills</Link></li>
        </ul>
      </div>

      {/* Content */}
      <div className="flex-1 p-6">
        <Outlet />
      </div>
    </div>
  );
}

export default AdminLayout;