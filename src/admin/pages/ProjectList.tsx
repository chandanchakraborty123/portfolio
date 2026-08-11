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
    <div className="text-white">
      <div className="flex justify-between items-start mb-6">
        <div>
          <div className="mt-3 max-w-md">
            <div className="search-wrapper">
              <i className="bi bi-search search-icon text-gray-400" />
              <input
                type="text"
                className="form-control form-control-sm ps-8"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ fontSize: '0.875rem' }}
              />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-muted small flex items-center gap-1">
            <i className="bi bi-folder2-open"></i>
            {filteredProjects.length}
          </span>

          <button
            className="btn-blue bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg"
            onClick={() => {
              setEditData(null);
              setOpen(true);
            }}
          >
            <i className="bi bi-plus-lg me-1"></i>
            Add Project
          </button>
        </div>
      </div>

      {loading ? (
        <div className="text-center py-6">
          <div className="spinner-border text-primary spinner-border-sm" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="text-gray-400 small mt-2">Loading projects...</p>
        </div>
      ) : filteredProjects.length === 0 ? (
        <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
          <div className="text-center py-6">
            <i className="bi bi-inbox fs-4 text-gray-400"></i>
            <p className="text-gray-400 small mt-2 mb-0">{searchTerm ? "No projects match" : "No projects yet"}</p>
          </div>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredProjects.map((p, i) => (
            <div key={p?._id || i}>
              <div className="bg-gray-900 rounded-xl p-4 border border-gray-700 h-full transition-transform hover:-translate-y-1">
                <div className="flex justify-between items-start mb-2">
                  <div className={`${getIconColor(p?.icon)} text-xl`}>{p?.icon || "🚀"}</div>
                  <div className="flex gap-2">
                    <button
                      className="text-yellow-400 hover:text-yellow-300 px-2 py-1 rounded"
                      onClick={() => {
                        setEditData(p);
                        setSelectedIndex(i);
                        setOpen(true);
                      }}
                    >
                      <i className="bi bi-pencil-square"></i>
                    </button>
                    <button
                      className="text-red-400 hover:text-red-300 px-2 py-1 rounded"
                      onClick={() => {
                        setSelectedIndex(p?._id);
                        setConfirmOpen(true);
                      }}
                    >
                      <i className="bi bi-trash"></i>
                    </button>
                  </div>
                </div>

                <h5 className="font-semibold text-white mb-1 text-sm">{p?.title}</h5>

                <p className="text-gray-400 text-sm mb-3" style={{ lineHeight: 1.3, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{p?.description}</p>

                <div className="flex flex-wrap gap-2 mb-2">
                  {p?.tech?.slice(0, 3).map((t: string, idx: number) => (
                    <span key={idx} className="bg-gray-800 px-2 py-1 rounded text-xs text-gray-300">{t}</span>
                  ))}
                  {p?.tech?.length > 3 && <span className="bg-gray-700 px-2 py-1 rounded text-xs text-gray-300">+{p.tech.length - 3}</span>}
                </div>

                {p?.liveUrl && (
                  <div className="mt-3 pt-3 border-t border-gray-700">
                    <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-400">
                      <i className="bi bi-box-arrow-up-right me-1"></i>
                      Live
                    </a>
                  </div>
                )}
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