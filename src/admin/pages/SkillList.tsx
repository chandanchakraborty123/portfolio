import { useState } from "react";
import SkillModal from "../components/SkillModal";
import ConfirmModal from "../components/ConfirmModal";

function SkillList() {
  const [skills, setSkills] = useState<any[]>([]);
  const [open, setOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [editData, setEditData] = useState<any>(null);

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between mb-4">
        <h2 className="text-xl font-semibold">Skills</h2>

        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => {
            setEditData(null);
            setOpen(true);
          }}
        >
          + Add Skill
        </button>
      </div>

      {/* List */}
      <div className="bg-gray-800 rounded p-4">
        {skills.length === 0 ? (
          <p>No skills added</p>
        ) : (
          skills.map((s, i) => (
            <div
              key={i}
              className="flex justify-between border-b border-gray-700 py-2"
            >
              <div>
                <h3>{s.name}</h3>
                <p className="text-sm text-gray-400">{s.level}</p>
              </div>

              <div className="flex gap-2">
                <button
                  className="text-yellow-400"
                  onClick={() => {
                    setEditData(s);
                    setSelectedIndex(i);
                    setOpen(true);
                  }}
                >
                  Edit
                </button>

                <button
                  className="text-red-400"
                  onClick={() => {
                    setSelectedIndex(i);
                    setConfirmOpen(true);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Modal */}
      {open && (
        <SkillModal
          close={() => setOpen(false)}
          save={(data: any) => {
            if (editData !== null && selectedIndex !== null) {
              const updated = [...skills];
              updated[selectedIndex] = data;
              setSkills(updated);
            } else {
              setSkills([...skills, data]);
            }
            setOpen(false);
          }}
          editData={editData}
        />
      )}

      {/* Confirm Delete */}
      {confirmOpen && (
        <ConfirmModal
          onCancel={() => setConfirmOpen(false)}
          onConfirm={() => {
            const updated = skills.filter((_, i) => i !== selectedIndex);
            setSkills(updated);
            setConfirmOpen(false);
          }}
        />
      )}
    </div>
  );
}

export default SkillList;