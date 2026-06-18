import axios from "axios";

export const fetchTeachers = async () => {
  try {
    const response = await axios.get(
      "http://localhost:3000/api/v1/admin/teachers",{
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return response.data;
  } catch (error) { 
    console.error("Error fetching teachers:", error);
    throw error;
  } 
};  