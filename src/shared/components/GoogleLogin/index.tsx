import React from "react";
import GoogleLogin, { GoogleLoginProps } from "react-google-login";

import useGoogleAuthentication from "shared/hooks/useGoogleAuthentication";

type GoogleButtonProps = {
  onSuccessCallback?: VoidFunction;
} & Omit<GoogleLoginProps, "clientId" | "onSuccess">;

function GoogleButton({
  onSuccessCallback,
  ...googleLoginProps
}: GoogleButtonProps) {
  const clientId = process.env.GOOGLE_AUTH_CLIENT_ID || "";
  const { handleSuccess } = useGoogleAuthentication();

  return (
    <GoogleLogin
      {...googleLoginProps}
      clientId={clientId}
      buttonText="Google Login"
      onSuccess={(res) => {
        handleSuccess(res);
        if (onSuccessCallback) {
          onSuccessCallback();
        }
      }}
    />
  );
}

export default GoogleButton;
