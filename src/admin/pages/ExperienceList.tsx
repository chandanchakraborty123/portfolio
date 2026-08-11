import { useEffect, useState } from "react";
import { BASE_URL } from "../../services/api";
import ExperienceModal from "../components/ExperienceModal";
import ConfirmModal from "../components/ConfirmModal";

function ExperienceList() {
  const [experiences, setExperiences] = useState<any[]>([]);
  const [open, setOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [selected, setSelected] = useState<any>(null);
  const [editData, setEditData] = useState<any>(null);

  const fetchExperience = async () => {
    const res = await fetch(`${BASE_URL}/experiences`);
    const data = await res.json();
    setExperiences(data?.list);
  };

  useEffect(() => {
    fetchExperience();
  }, []);

  return (
    <div className="text-white">

      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div />

        <button
          className="btn-blue bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg"
          onClick={() => {
            setEditData(null);
            setOpen(true);
          }}
        >
          <i className="bi bi-plus-lg me-2"></i>
          Add Experience
        </button>
      </div>

      {experiences.length === 0 ? (
        <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
          <div className="text-center py-6">
            <i className="bi bi-inbox fs-4 text-gray-400"></i>
            <p className="text-gray-400 small mt-2 mb-0">No experience added</p>
          </div>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            <thead className="bg-gray-800">
              <tr>
                <th className="px-4 py-2 text-left">#</th>
                <th className="px-4 py-2 text-left">Company</th>
                <th className="px-4 py-2 text-left">Role</th>
                <th className="px-4 py-2 text-left">Duration</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>

            <tbody>
              {experiences.map((e, i) => (
                <tr key={i} className="border-b border-gray-700">
                  <td className="px-4 py-3">{i + 1}</td>

                  <td className="px-4 py-3 font-semibold">{e.company}</td>

                  <td className="px-4 py-3">{e.role}</td>

                  <td className="px-4 py-3">
                    <small className="text-gray-400">{e.duration}</small>
                  </td>

                  <td className="px-4 py-3">
                    <button
                      className="text-yellow-400 hover:text-yellow-300 mr-3"
                      onClick={() => {
                        setEditData(e);
                        setSelected(e);
                        setOpen(true);
                      }}
                    >
                      <i className="bi bi-pencil-square"></i>
                    </button>

                    <button
                      className="text-red-400 hover:text-red-300"
                      onClick={() => {
                        setSelected(e);
                        setConfirmOpen(true);
                      }}
                    >
                      <i className="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Modal */}
      {open && (
        <ExperienceModal
          close={() => setOpen(false)}
          refresh={fetchExperience}
          editData={editData}
        />
      )}

      {/* Confirm Delete */}
      {confirmOpen && (
        <ConfirmModal
          onCancel={() => setConfirmOpen(false)}
          onConfirm={async () => {
            await fetch(`${BASE_URL}/experience/${selected._id}`, {
              method: "DELETE",
            });
            fetchExperience();
            setConfirmOpen(false);
          }}
        />
      )}

    </div>
  );
}

export default ExperienceList;