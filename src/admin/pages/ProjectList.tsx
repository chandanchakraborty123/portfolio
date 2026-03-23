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

  const fetchProjects = async () => {
    const res = await fetch(`${BASE_URL}/projects`);
    const data = await res.json();
    setProjects(data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="container mt-4">

    {/* Header */}
    <div className="d-flex justify-content-between align-items-center mb-4">
      <h2 className="fw-bold">Projects</h2>
  
      <button
        className="btn btn-primary d-flex align-items-center gap-2"
        onClick={() => {
          setEditData(null);
          setOpen(true);
        }}
      >
        <i className="bi bi-plus-lg"></i>
        Add Project
      </button>
    </div>
  
    {/* Card */}
    <div className="card shadow-sm border-0">
      <div className="card-body">
  
        {projects.length === 0 ? (
          <p className="text-muted text-center">No projects yet</p>
        ) : (
          <div className="table-responsive">
            <table className="table table-hover align-middle">
  
              {/* Header */}
              <thead className="table-light">
                <tr>
                  <th>#</th>
                  <th>Project</th>
                  <th>Tech</th>
                  <th>Actions</th>
                </tr>
              </thead>
  
              {/* Body */}
              <tbody>
                {projects.map((p, i) => (
                  <tr key={i}>
                    
                    {/* Index */}
                    <td>{i + 1}</td>
  
                    {/* Project Info */}
                    <td>
                      <div className="d-flex align-items-start gap-2">
                        
                        <div className="fs-4">
                          {p?.icon || "🚀"}
                        </div>
  
                        <div>
                          <div className="fw-semibold">{p?.title}</div>
                          <small className="text-muted">
                            {p?.description}
                          </small>
                        </div>
  
                      </div>
                    </td>
  
                    {/* Tech */}
                    <td>
                      {p?.tech?.map((t: string, i: number) => (
                        <span
                          key={i}
                          className="badge bg-primary me-1 mb-1"
                        >
                          {t}
                        </span>
                      ))}
                    </td>
  
                    {/* Actions */}
                    <td>
                      <button
                        className="btn btn-sm btn-outline-warning me-2"
                        onClick={() => {
                          setEditData(p);
                          setSelectedIndex(i);
                          setOpen(true);
                        }}
                      >
                        <i className="bi bi-pencil-square"></i>
                      </button>
  
                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => {
                          setSelectedIndex(i);
                          setConfirmOpen(true);
                        }}
                      >
                        <i className="bi bi-trash"></i>
                      </button>
                    </td>
  
                  </tr>
                ))}
              </tbody>
  
            </table>
          </div>
        )}
  
      </div>
    </div>
  
    {/* Modal */}
    {open && (
      <ProjectModal
        close={() => setOpen(false)}
        refresh={fetchProjects}
        editData={editData}
        index={selectedIndex}
      />
    )}
  
    {/* Confirm Delete */}
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