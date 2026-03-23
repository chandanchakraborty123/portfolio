const BASE_URL = import.meta.env.VITE_API_URL; // already using env

export const getSkills = async () => {
  const res = await fetch(`${BASE_URL}/skills`);
  return res.json();
};

export const addSkill = async (data: any) => {
  const res = await fetch(`${BASE_URL}/skills`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const updateSkill = async (id: string, data: any) => {
  const res = await fetch(`${BASE_URL}/skills/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const deleteSkill = async (id: string) => {
  const res = await fetch(`${BASE_URL}/skills/${id}`, {
    method: "DELETE",
  });
  return res.json();
};