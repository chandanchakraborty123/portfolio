import { useState, useEffect } from "react";
import { BASE_URL } from "../../services/api";
import ModalShell from "./ModalShell";

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
    <ModalShell
      title={editData ? "Edit Experience" : "Add Experience"}
      onClose={close}
      size="md"
      className=""
      footer={
        <>
          <button className="btn btn-light btn-sm border px-3" onClick={close}>Cancel</button>
          <button className="btn btn-primary btn-sm px-3" onClick={handleSubmit}>{editData ? "Update" : "Save"}</button>
        </>
      }
    >
      <div>
        <input className="form-control form-control-sm mb-2" placeholder="Company" value={company} onChange={(e) => setCompany(e.target.value)} />

        <input className="form-control form-control-sm mb-2" placeholder="Role" value={role} onChange={(e) => setRole(e.target.value)} />

        <input className="form-control form-control-sm mb-2" placeholder="Duration" value={duration} onChange={(e) => setDuration(e.target.value)} />

        <textarea className="form-control form-control-sm" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} rows={4} />
      </div>
    </ModalShell>
  );
}

export default ExperienceModal;