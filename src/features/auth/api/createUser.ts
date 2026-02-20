import type { ApiError } from "@/types/ApiError";
import type { RegisterForm } from "../types";

type SuccessResponse = {
  object: string;
  id?: number;
  isAccepted?: boolean;
};

async function createUser(
  post: RegisterForm,
): Promise<SuccessResponse | ApiError> {
  const url = "http://localhost:3000/onboarding";

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

  return data as SuccessResponse;
}

export default createUser;
