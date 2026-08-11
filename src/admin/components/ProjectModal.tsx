import { useState, useEffect } from "react";
import { BASE_URL } from "../../services/api";
import ModalShell from "./ModalShell";

function ProjectModal({ close, refresh, editData, index }: any) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tech, setTech] = useState("");
  const [link, setLink] = useState("");
  const [icon, setIcon] = useState("");

  useEffect(() => {
    if (editData) {
      setTitle(editData.title || "");
      setDescription(editData.description || "");
      setTech(editData.tech ? editData.tech.join(",") : "");
      setLink(editData.link || "");
      setIcon(editData.icon || "");
    }
  }, [editData]);

  const handleSubmit = async () => {
    const method = editData ? "PUT" : "POST";
    const url = editData
      ? `${BASE_URL}/projects/${index}`
      : `${BASE_URL}/projects`;

    await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
        tech: tech.split(",").map((t) => t.trim()),
        link,
        icon,
      }),
    });

    refresh();
    close();
  };

  return (
    <ModalShell
      title={editData ? "Edit Project" : "Add Project"}
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
        <input
          className="form-control form-control-sm mb-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Project Title"
        />

        <textarea
          className="form-control form-control-sm mb-2"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Project Description"
          rows={4}
        />

        <input
          className="form-control form-control-sm mb-2"
          value={tech}
          onChange={(e) => setTech(e.target.value)}
          placeholder="Tech (comma separated e.g. React, Node)"
        />

        <input
          className="form-control form-control-sm mb-2"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          placeholder="Project Link (https://...)"
        />

        <input
          className="form-control form-control-sm mb-0"
          value={icon}
          onChange={(e) => setIcon(e.target.value)}
          placeholder="Icon (emoji like 🚀)"
        />
      </div>
    </ModalShell>
  );
}

export default ProjectModal;