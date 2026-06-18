import { useMutation } from "@tanstack/react-query";
import axios from "../../config/axios.ts";
import ENDPOINTS from "../../config/endpoints.ts";
import { toast } from "react-toastify";
import type { ILogin } from "../../types/login.type.ts";
import { setItem } from "../../utils/localstorage.ts";
const useLogin = () => {
  const onLogin = async (data: ILogin) => {
    const response = await axios.post(ENDPOINTS.auth.login, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    setItem("token", response.data.token);

    return response;
  };
  const { data, isSuccess, isError, isPending, mutateAsync, error } =
    useMutation({
      mutationFn: async (data: ILogin) => await onLogin(data),
      mutationKey: ["login"],
      onError: (error) => {
        //@ts-ignore
        const errorMessage = error.response.data.message;
        toast.error(errorMessage);
      },
    });
  return { data, error, isSuccess, isError, isPending, mutateAsync };
};
export default useLogin;
