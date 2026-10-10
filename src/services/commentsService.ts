import { API_BASE_URL, API_ENDPOINTS } from "@/constants";
import type { CommentType } from "@/types";

const getComments = async (): Promise<CommentType[]> => {
  const response = await fetch(`${API_BASE_URL}/${API_ENDPOINTS.comments}`);

  if (!response.ok) {
    throw new Error("Failed to fetch comments");
  }

  return response.json();
};

export { getComments };
