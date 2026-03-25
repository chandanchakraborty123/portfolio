import { Link, Outlet, useLocation } from "react-router-dom";
import { useState } from "react";

function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();

  const navigation = [
    { name: "Dashboard", path: "/admin", icon: "bi bi-speedometer2" },
    { name: "Projects", path: "/admin/projects", icon: "bi bi-folder2-open" },
    { name: "Skills", path: "/admin/skills", icon: "bi bi-code-square" },
    { name: "Settings", path: "/admin/settings", icon: "bi bi-gear" },
  ];

  const isActive = (path:any) => {
    if (path === "/admin" && location.pathname === "/admin") return true;
    if (path !== "/admin" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <div className="d-flex vh-100 bg-light">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 z-index-1020 d-lg-none"
          onClick={() => setSidebarOpen(false)}
          style={{ zIndex: 1020 }}
        />
      )}

      {/* Sidebar */}
      <div 
        className={`
          position-fixed position-lg-static top-0 start-0 h-100
          ${sidebarOpen ? 'translate-x-0' : 'translate-x-n100'} 
          transition-all duration-300
          bg-gradient-dark text-white
          shadow-lg z-index-1030
        `}
        style={{
          width: '280px',
          transform: sidebarOpen ? 'translateX(0)' : 'translateX(-100%)',
          transition: 'transform 0.3s ease-in-out',
        }}
      >
        {/* Sidebar Header */}
        <div className="p-4 border-bottom border-secondary">
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center gap-3">
              <div className="bg-gradient-primary rounded d-flex align-items-center justify-content-center" 
                   style={{ width: '40px', height: '40px' }}>
                <i className="bi bi-grid-3x3-gap-fill text-white fs-5"></i>
              </div>
              <div>
                <h1 className="h5 fw-bold mb-0">Admin Panel</h1>
                <small className="text-secondary">Content Management</small>
              </div>
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="btn btn-link text-white p-0 d-lg-none"
            >
              <i className="bi bi-x-lg fs-5"></i>
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-grow-1 p-3">
          <div className="d-flex flex-column gap-2">
            {navigation.map((item) => {
              const active = isActive(item.path);
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`
                    d-flex align-items-center justify-content-between
                    px-3 py-3 rounded-2 text-decoration-none
                    transition-all
                    ${active 
                      ? 'bg-gradient-primary text-white shadow' 
                      : 'text-white-50 hover-bg-hover'
                    }
                  `}
                  style={{ transition: 'all 0.2s' }}
                >
                  <div className="d-flex align-items-center gap-3">
                    <i className={`${item.icon} fs-5 ${active ? 'text-white' : ''}`}></i>
                    <span className="fw-medium">{item.name}</span>
                  </div>
                  {active && <i className="bi bi-chevron-right fs-6"></i>}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Sidebar Footer */}
        <div className="p-3 border-top border-secondary mt-auto">
          <button className="btn btn-link text-white-50 text-decoration-none w-100 text-start px-3 py-2 rounded-2 hover-bg-hover">
            <i className="bi bi-box-arrow-right me-3"></i>
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1 d-flex flex-column overflow-hidden">
        {/* Top Header */}
        <header className="bg-white shadow-sm border-bottom">
          <div className="px-4 py-3 d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center gap-3">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="btn btn-light btn-sm rounded-circle d-lg-none"
                style={{ width: '40px', height: '40px' }}
              >
                <i className="bi bi-list fs-5"></i>
              </button>
              <div className="d-none d-lg-block">
                <h2 className="h5 fw-semibold text-dark mb-0">
                  {navigation.find(nav => isActive(nav.path))?.name || "Dashboard"}
                </h2>
                <small className="text-muted">Manage your portfolio content</small>
              </div>
            </div>
            
            {/* User Menu */}
            <div className="d-flex align-items-center gap-3">
              <div className="dropdown">
                <button 
                  className="btn btn-link text-decoration-none p-0 d-flex align-items-center gap-2"
                  data-bs-toggle="dropdown"
                >
                  <div className="bg-gradient-primary rounded-circle d-flex align-items-center justify-content-center"
                       style={{ width: '40px', height: '40px' }}>
                    <i className="bi bi-person-fill text-white"></i>
                  </div>
                  <div className="d-none d-md-block text-start">
                    <div className="fw-semibold text-dark">Admin User</div>
                    <small className="text-muted">admin@example.com</small>
                  </div>
                  <i className="bi bi-chevron-down text-muted d-none d-md-block"></i>
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li><a className="dropdown-item" href="#"><i className="bi bi-person me-2"></i> Profile</a></li>
                  <li><a className="dropdown-item" href="#"><i className="bi bi-gear me-2"></i> Settings</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item text-danger" href="#"><i className="bi bi-box-arrow-right me-2"></i> Logout</a></li>
                </ul>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-grow-1 overflow-auto bg-light p-4">
          <Outlet />
        </main>
      </div>

      <style type="text/css">{`
        .bg-gradient-dark {
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
        }
        
        .bg-gradient-primary {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
        
        .hover-bg-hover:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }
        
        .translate-x-n100 {
          transform: translateX(-100%);
        }
        
        .transition-all {
          transition: all 0.3s ease;
        }
        
        @media (min-width: 992px) {
          .position-lg-static {
            position: static !important;
          }
        }
      `}</style>
    </div>
  );
}

export default AdminLayout;