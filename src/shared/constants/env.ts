export const isServer = typeof window === "undefined";

export const API_SERVER_ENDPOINT =
  process.env.API_SERVER_ENDPOINT || "http://localhost:3000";
export const SOCKET_SERVER_ENDPOINT = "http://localhost:5000";
