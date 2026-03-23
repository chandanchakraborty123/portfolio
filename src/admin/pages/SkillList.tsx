import { useEffect, useState } from "react";
import SkillModal from "../components/SkillModal";
import ConfirmModal from "../components/ConfirmModal";
import {
  getSkills,
  addSkill,
  updateSkill,
  deleteSkill,
} from "../../services/skillsApi";

function SkillList() {
  const [skills, setSkills] = useState<any[]>([]);
  const [open, setOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState<any>(null);
  const [editData, setEditData] = useState<any>(null);

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    const data = await getSkills();
    setSkills(data);
  };

  return (
    <div className="text-white">
      
      {/* Header */}
      <div className="flex justify-between mb-6">
        <h2 className="text-2xl font-bold">Skills</h2>

        <button
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg"
          onClick={() => {
            setEditData(null);
            setOpen(true);
          }}
        >
          + Add Category
        </button>
      </div>

      {/* List */}
      <div className="bg-gray-900 rounded-xl p-4 border border-gray-700">
        {skills.length === 0 ? (
          <p className="text-gray-400">No skills added</p>
        ) : (
          skills.map((s) => (
            <div
              key={s._id}
              className="flex justify-between border-b border-gray-700 py-4"
            >
              {/* Left */}
              <div>
                <h3 className="text-blue-400 font-semibold">
                  {s.category}
                </h3>

                <div className="flex flex-wrap gap-2 mt-2">
                  {s.skills.map((skill: string, i: number) => (
                    <span
                      key={i}
                      className="bg-gray-800 px-2 py-1 rounded text-sm text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right */}
              <div className="flex gap-3">
                <button
                  className="text-yellow-400 hover:text-yellow-300"
                  onClick={() => {
                    setEditData(s);
                    setSelectedSkill(s);
                    setOpen(true);
                  }}
                >
                  Edit
                </button>

                <button
                  className="text-red-400 hover:text-red-300"
                  onClick={() => {
                    setSelectedSkill(s);
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

      {/* Add/Edit Modal */}
      {open && (
        <SkillModal
          close={() => setOpen(false)}
          editData={editData}
          save={async (data: any) => {
            if (editData) {
              await updateSkill(editData._id, data);
            } else {
              await addSkill(data);
            }

            await fetchSkills(); // refresh
            setOpen(false);
          }}
        />
      )}

      {/* Confirm Delete */}
      {confirmOpen && (
        <ConfirmModal
          onCancel={() => setConfirmOpen(false)}
          onConfirm={async () => {
            if (selectedSkill?._id) {
              await deleteSkill(selectedSkill._id);
              await fetchSkills();
            }
            setConfirmOpen(false);
          }}
        />
      )}
    </div>
  );
}

export default SkillList;