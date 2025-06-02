import { Project } from "@/types/Project";
import axios from "axios";
import { domain } from "@/domain";

export const getProjects = async (): Promise<Project[]> => {
  try {
    const res = await axios.get(
      `${domain}/api/project?clientId=${process.env.NEXT_PUBLIC_CLIENT_ID}`
    );
    return res.data;
  } catch (error) {
    // Optionally log or handle error
    console.log(error);
    return [];
  }
};
