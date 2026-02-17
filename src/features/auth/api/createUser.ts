import type { RegisterForm } from "../types";

async function createUser(data: RegisterForm) {
  const url = "http://localhost:3000/register";
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Register failed");
  }

  return response.json();
}

export default createUser;
