import app from "../app";

export const getAllCours = async () => {
  const response = await app.get("/public/courses");

  
  return response.data;
};
