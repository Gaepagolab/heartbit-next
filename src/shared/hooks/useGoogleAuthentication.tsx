import {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login";

import { googleLogin } from "../api/authenticate";
import useCurrentUser from "./useCurrentUser";

function useGoogleAuthentication() {
  const [_, setUser] = useCurrentUser();

  const handleSuccess = async (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => {
    if ("accessToken" in response) {
      const token = response.accessToken;
      const user = await googleLogin(token);
      setUser(user);
    }
  };

  return {
    handleSuccess,
  };
}

export default useGoogleAuthentication;
