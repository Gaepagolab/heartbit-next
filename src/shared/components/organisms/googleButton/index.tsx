import React from "react";
import GoogleLogin from "react-google-login";

import useGoogleAuthentication from "shared/hooks/useGoogleAuthentication";

function GoogleButton({ renderer }) {
  const clientId = process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID || "";
  const { handleSuccess } = useGoogleAuthentication();

  return (
    <GoogleLogin
      clientId={clientId}
      buttonText="Log in"
      onSuccess={handleSuccess}
      onFailure={(res) => console.log(res)}
      render={renderer}
    />
  );
}

export default GoogleButton;