import type { ApiError } from "@/types/ApiError";
import type { RegisterForm } from "../types";

async function createUser(post: RegisterForm) {
  const url = "http://localhost:3000/register";
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error((data as ApiError).error.message);
    }

    return data;
  } catch (error) {}
}

export default createUser;
