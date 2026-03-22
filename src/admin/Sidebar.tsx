import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const { pathname } = useLocation();

  const menu = [
    { name: "Projects", path: "/admin/projects" },
    { name: "Skills", path: "/admin/skills" },
  ];

  return (
    <div className="w-64 bg-gray-900 text-white min-h-screen p-4">
      <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>

      {menu.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`block p-2 rounded mb-2 ${
            pathname === item.path ? "bg-blue-500" : "hover:bg-gray-700"
          }`}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
}

export default Sidebar;