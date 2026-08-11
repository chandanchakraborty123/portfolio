import { useState, useEffect } from "react";
import ModalShell from "./ModalShell";

function SkillModal({ close, save, editData }: any) {
  const [category, setCategory] = useState("");
  const [skills, setSkills] = useState("");

  useEffect(() => {
    if (editData) {
      setCategory(editData.category);
      setSkills(editData.skills.join(", "));
    }
  }, [editData]);

  const handleSave = () => {
    const formattedData = {
      category,
      skills: skills.split(",").map((s) => s.trim()),
    };

    save(formattedData);
  };

  return (
    <ModalShell
      title={editData ? "Edit Skill" : "Add Skill"}
      onClose={close}
      size="sm"
      className=""
      footer={
        <>
          <button onClick={close} className="btn btn-light border px-4">Cancel</button>
          <button className="btn btn-primary px-4" onClick={handleSave}>Save</button>
        </>
      }
    >
      <div>
        <input
          className="form-control mb-3 shadow-none"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Category (e.g. Styling & UI)"
        />

        <textarea
          className="form-control shadow-none"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
          placeholder="Skills (comma separated)"
          rows={3}
        />
      </div>
    </ModalShell>
  );
}

export default SkillModal;