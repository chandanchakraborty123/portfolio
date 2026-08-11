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
      size="md"
      className=""
      footer={
        <>
          <button onClick={close} className="btn btn-light btn-sm border px-3">Cancel</button>
          <button className="btn btn-primary btn-sm px-3" onClick={handleSave}>Save</button>
        </>
      }
    >
      <div>
        <input
          className="form-control form-control-sm mb-2"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Category (e.g. Styling & UI)"
        />

        <textarea
          className="form-control form-control-sm"
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