import { useState, useEffect } from "react";
import { BASE_URL } from "../../services/api";

function ExperienceModal({ close, refresh, editData }: any) {
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [duration, setDuration] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (editData) {
      setCompany(editData.company || "");
      setRole(editData.role || "");
      setDuration(editData.duration || "");
      setDescription(editData.description || "");
    }
  }, [editData]);

  const handleSubmit = async () => {
    const method = editData ? "PUT" : "POST";
    const url = editData
      ? `${BASE_URL}/experience/${editData._id}`
      : `${BASE_URL}/experience/add`;

    await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        company,
        role,
        duration,
        description,
      }),
    });

    refresh();
    close();
  };

  return (
    <div className="modal d-block" tabIndex={-1}>
      <div className="modal-dialog">
        <div className="modal-content">

          <div className="modal-header">
            <h5 className="modal-title">
              {editData ? "Edit Experience" : "Add Experience"}
            </h5>
            <button className="btn-close" onClick={close}></button>
          </div>

          <div className="modal-body">

            <input
              className="form-control mb-2"
              placeholder="Company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />

            <input
              className="form-control mb-2"
              placeholder="Role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />

            <input
              className="form-control mb-2"
              placeholder="Duration"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />

            <textarea
              className="form-control"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

          </div>

          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={close}>
              Cancel
            </button>

            <button className="btn btn-primary" onClick={handleSubmit}>
              {editData ? "Update" : "Save"}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ExperienceModal;