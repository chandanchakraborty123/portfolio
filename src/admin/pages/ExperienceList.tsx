import { useEffect, useState } from "react";
import { BASE_URL } from "../../services/api";
import ExperienceModal from "../components/ExperienceModal";
import ConfirmModal from "../components/ConfirmModal";

function ExperienceList() {
  const [experiences, setExperiences] = useState<any[]>([]);
  const [open, setOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [selected, setSelected] = useState<any>(null);
  const [editData, setEditData] = useState<any>(null);

  const fetchExperience = async () => {
    const res = await fetch(`${BASE_URL}/experiences`);
    const data = await res.json();
    setExperiences(data?.list);
  };

  useEffect(() => {
    fetchExperience();
  }, []);

  return (
    <div className="container mt-4">

      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold">Experience</h2>

        <button
          className="btn btn-primary d-flex align-items-center gap-2"
          onClick={() => {
            setEditData(null);
            setOpen(true);
          }}
        >
          <i className="bi bi-plus-lg"></i>
          Add Experience
        </button>
      </div>

      {/* Table */}
      <div className="card shadow-sm border-0">
        <div className="card-body">

          {experiences.length === 0 ? (
            <p className="text-muted text-center">No experience added</p>
          ) : (
            <div className="table-responsive">
              <table className="table table-hover align-middle">

                <thead className="table-light">
                  <tr>
                    <th>#</th>
                    <th>Company</th>
                    <th>Role</th>
                    <th>Duration</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {experiences.map((e, i) => (
                    <tr key={i}>
                      <td>{i + 1}</td>

                      <td className="fw-semibold">{e.company}</td>

                      <td>{e.role}</td>

                      <td>
                        <small className="text-muted">{e.duration}</small>
                      </td>

                      <td>
                        <button
                          className="btn btn-sm btn-outline-warning me-2"
                          onClick={() => {
                            setEditData(e);
                            setSelected(e);
                            setOpen(true);
                          }}
                        >
                          <i className="bi bi-pencil-square"></i>
                        </button>

                        <button
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => {
                            setSelected(e);
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
        <ExperienceModal
          close={() => setOpen(false)}
          refresh={fetchExperience}
          editData={editData}
        />
      )}

      {/* Confirm Delete */}
      {confirmOpen && (
        <ConfirmModal
          onCancel={() => setConfirmOpen(false)}
          onConfirm={async () => {
            await fetch(`${BASE_URL}/experience/${selected._id}`, {
              method: "DELETE",
            });
            fetchExperience();
            setConfirmOpen(false);
          }}
        />
      )}

    </div>
  );
}

export default ExperienceList;