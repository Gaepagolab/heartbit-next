import { User } from "../types";
import { apiClient } from "../utils/client";

export const sendVerificationEmail = async (email: string) => {
  const response = await apiClient.post(
    "/email-confirmation/send-verification-link",
    { email }
  );
  return response.data;
};

export const checkEmail = async (email: string) => {
  const response = await apiClient.post("/authentication/check-email", {
    email,
  });
  return response.data;
};

export const me = async (): Promise<User> => {
  const response = await apiClient.get<User>("/authentication");
  return response.data;
};

export const logout = async () => {
  const response = await apiClient.post("/authentication/log-out");
  return response.data;
};

export const googleLogin = async (token: string) => {
  const response = await await apiClient.post<User>("google-authentication", {
    token,
  });
  return response.data;
};
