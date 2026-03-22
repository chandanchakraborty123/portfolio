import { useState, useEffect } from "react";

function SkillModal({ close, save, editData }: any) {
  const [name, setName] = useState("");
  const [level, setLevel] = useState("");

  useEffect(() => {
    if (editData) {
      setName(editData.name);
      setLevel(editData.level);
    }
  }, [editData]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-5 rounded w-96">
        <h2 className="mb-3 text-lg font-semibold">
          {editData ? "Edit Skill" : "Add Skill"}
        </h2>

        {/* Name */}
        <input
          className="border w-full mb-2 p-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Skill Name"
        />

        {/* Level */}
        <input
          className="border w-full mb-3 p-2"
          value={level}
          onChange={(e) => setLevel(e.target.value)}
          placeholder="Level (e.g. Beginner / Advanced)"
        />

        {/* Buttons */}
        <div className="flex justify-end gap-2">
          <button onClick={close}>Cancel</button>
          <button
            className="bg-blue-500 text-white px-3 py-1"
            onClick={() => save({ name, level })}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default SkillModal;