import { useState, useEffect } from "react";

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
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50">
      
      <div className="bg-gray-900 text-white p-6 rounded-2xl w-96 border border-gray-700 shadow-xl">
        
        <h2 className="mb-4 text-xl font-bold text-blue-400">
          {editData ? "Edit Skill" : "Add Skill"}
        </h2>

        {/* Category */}
        <input
          className="border border-gray-700 bg-gray-800 w-full mb-3 p-2 rounded-lg focus:outline-none focus:border-blue-500"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Category (e.g. Styling & UI)"
        />

        {/* Skills */}
        <textarea
          className="border border-gray-700 bg-gray-800 w-full mb-4 p-2 rounded-lg focus:outline-none focus:border-blue-500"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
          placeholder="Skills (comma separated)"
        />

        {/* Buttons */}
        <div className="flex justify-end gap-3">
          <button
            onClick={close}
            className="px-4 py-2 rounded-lg border border-gray-600 hover:border-gray-400"
          >
            Cancel
          </button>

          <button
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition"
            onClick={handleSave}
          >
            Save
          </button>
        </div>

      </div>
    </div>
  );
}

export default SkillModal;