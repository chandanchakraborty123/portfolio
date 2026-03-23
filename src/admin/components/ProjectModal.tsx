import { useState, useEffect } from "react";
import { BASE_URL } from "../../services/api";

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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-lg">
        <h2 className="mb-4 text-xl font-semibold">
          {editData ? "Edit Project" : "Add Project"}
        </h2>

        {/* Title */}
        <input
          className="border w-full mb-3 p-2 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Project Title"
        />

        {/* Description */}
        <textarea
          className="border w-full mb-3 p-2 rounded"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Project Description"
        />

        {/* Tech */}
        <input
          className="border w-full mb-3 p-2 rounded"
          value={tech}
          onChange={(e) => setTech(e.target.value)}
          placeholder="Tech (comma separated e.g. React, Node)"
        />

        {/* Link */}
        <input
          className="border w-full mb-3 p-2 rounded"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          placeholder="Project Link (https://...)"
        />

        {/* Icon */}
        <input
          className="border w-full mb-4 p-2 rounded"
          value={icon}
          onChange={(e) => setIcon(e.target.value)}
          placeholder="Icon (emoji like 🚀)"
        />

        {/* Buttons */}
        <div className="flex justify-end gap-2">
          <button
            className="px-4 py-2 border rounded"
            onClick={close}
          >
            Cancel
          </button>

          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleSubmit}
          >
            {editData ? "Update" : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;