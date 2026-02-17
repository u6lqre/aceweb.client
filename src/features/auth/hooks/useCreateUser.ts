import { useMutation } from "@tanstack/react-query";
import createUser from "../api/createUser";

export default function useCreateUser() {
  return useMutation({
    mutationFn: createUser,
  });
}
