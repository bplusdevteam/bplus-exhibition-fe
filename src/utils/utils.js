import { API_URL } from "@/config/api";

export const getUrlImage = (path) => {
  if (!path) return "";

  return `${API_URL}${path}`;
};
