import { useEffect, useState } from "react";
import { BASE_URL } from "../../services/api";
import ProjectModal from "../components/ProjectModal";
import ConfirmModal from "../components/ConfirmModal";

function ProjectList() {
  const [projects, setProjects] = useState<any[]>([]);
  const [open, setOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [editData, setEditData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchProjects = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/projects`);
      const data = await res.json();
      setProjects(data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const filteredProjects = projects.filter(project =>
    project?.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project?.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project?.tech?.some((t: string) => t.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const getIconColor = (icon: string) => {
    const colorMap: any = {
      "🚀": "text-primary",
      "🎨": "text-purple",
      "📱": "text-success",
      "💻": "text-info",
      "🔧": "text-warning",
      "⚡": "text-danger",
    };
    return colorMap[icon] || "text-secondary";
  };

  return (
    <div className="container-fluid px-3 px-md-4 py-3">
      {/* Compact Header */}
      <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center mb-3 gap-2">
        <div>
          <h5 className="fw-bold mb-0 text-dark">
            <i className="bi bi-folder2-open me-2"></i>
            Projects
          </h5>
          <small className="text-muted">Manage your portfolio projects</small>
        </div>

        <button
          className="btn btn-primary btn-sm px-3 d-flex align-items-center gap-1"
          onClick={() => {
            setEditData(null);
            setOpen(true);
          }}
        >
          <i className="bi bi-plus-lg fs-6"></i>
          <span>Add Project</span>
        </button>
      </div>

      {/* Compact Search Bar */}
      <div className="card shadow-sm border-0 mb-3">
        <div className="card-body p-2">
          <div className="d-flex gap-2 align-items-center">
            <div className="flex-grow-1 position-relative">
              <i className="bi bi-search position-absolute top-50 start-0 translate-middle-y ms-2 text-muted small"></i>
              <input
                type="text"
                className="form-control form-control-sm ps-4"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ fontSize: '0.875rem' }}
              />
            </div>
            <span className="text-muted small">
              <i className="bi bi-folder2-open me-1"></i>
              {filteredProjects.length}
            </span>
            {searchTerm && (
              <button
                className="btn btn-sm btn-link text-secondary p-0"
                onClick={() => setSearchTerm("")}
                style={{ fontSize: '0.75rem' }}
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Compact Grid View */}
      {loading ? (
        <div className="text-center py-4">
          <div className="spinner-border text-primary spinner-border-sm" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="text-muted small mt-2">Loading projects...</p>
        </div>
      ) : filteredProjects.length === 0 ? (
        <div className="card shadow-sm border-0">
          <div className="card-body text-center py-4">
            <i className="bi bi-inbox fs-4 text-muted"></i>
            <p className="text-muted small mt-2 mb-0">
              {searchTerm ? "No projects match" : "No projects yet"}
            </p>
          </div>
        </div>
      ) : (
        <div className="row g-2">
          {filteredProjects.map((p, i) => (
            <div className="col-md-6 col-xl-4 col-xxl-3" key={p?._id || i}>
              <div className="card h-100 shadow-sm border-0" style={{ transition: 'all 0.2s ease' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 0.25rem 0.5rem rgba(0, 0, 0, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)';
                }}
              >
                <div className="card-body p-3">
                  {/* Compact Header */}
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <div className={`fs-5 ${getIconColor(p?.icon)}`}>
                      {p?.icon || "🚀"}
                    </div>
                    <div className="btn-group btn-group-sm">
                      <button
                        className="btn btn-sm btn-outline-warning"
                        onClick={() => {
                          setEditData(p);
                          setSelectedIndex(i);
                          setOpen(true);
                        }}
                        style={{ padding: '0.2rem 0.4rem', fontSize: '0.75rem' }}
                      >
                        <i className="bi bi-pencil-square"></i>
                      </button>
                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => {
                          setSelectedIndex(p?._id);
                          setConfirmOpen(true);
                        }}
                        style={{ padding: '0.2rem 0.4rem', fontSize: '0.75rem' }}
                      >
                        <i className="bi bi-trash"></i>
                      </button>
                    </div>
                  </div>

                  {/* Compact Title */}
                  <h6 className="fw-bold mb-1" style={{ fontSize: '0.95rem' }}>{p?.title}</h6>
                  
                  {/* Compact Description */}
                  <p className="text-muted small mb-2" style={{
                    fontSize: '0.75rem',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    lineHeight: '1.3'
                  }}>
                    {p?.description}
                  </p>

                  {/* Compact Tech Stack */}
                  <div className="d-flex flex-wrap gap-1 mb-2">
                    {p?.tech?.slice(0, 3).map((t: string, idx: number) => (
                      <span
                        key={idx}
                        className="badge bg-light text-dark border px-1 py-0.5"
                        style={{ fontSize: '0.65rem', fontWeight: 'normal' }}
                      >
                        {t}
                      </span>
                    ))}
                    {p?.tech?.length > 3 && (
                      <span className="badge bg-secondary px-1 py-0.5" style={{ fontSize: '0.65rem' }}>
                        +{p.tech.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Optional Live Link */}
                  {p?.liveUrl && (
                    <div className="mt-1 pt-1 border-top">
                      <a
                        href={p.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-decoration-none small"
                        style={{ fontSize: '0.7rem' }}
                      >
                        <i className="bi bi-box-arrow-up-right me-1"></i>
                        Live
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modals */}
      {open && (
        <ProjectModal
          close={() => setOpen(false)}
          refresh={fetchProjects}
          editData={editData}
          index={selectedIndex}
        />
      )}

      {confirmOpen && (
        <ConfirmModal
          onCancel={() => setConfirmOpen(false)}
          onConfirm={async () => {
            await fetch(`${BASE_URL}/projects/${selectedIndex}`, {
              method: "DELETE",
            });
            fetchProjects();
            setConfirmOpen(false);
          }}
        />
      )}
    </div>
  );
}

export default ProjectList;