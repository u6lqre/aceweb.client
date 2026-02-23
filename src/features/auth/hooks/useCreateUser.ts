import { useMutation } from "@tanstack/react-query";
import createUser from "../api/createUser";
import type { RegisterForm } from "../types";

export default function useCreateUser() {
  return useMutation({
    mutationFn: async (data: RegisterForm) => {
      await sleep();
      return createUser(data);
    },
  });
}

function sleep() {
  const minLoadingTime = 300;
  return new Promise((resolve) => setTimeout(resolve, minLoadingTime));
}
