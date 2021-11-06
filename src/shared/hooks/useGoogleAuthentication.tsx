import { GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';

import { apiClient } from 'utils/client';

function useGoogleAuthentication() {
  const handleSuccess = async (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    if ('accessToken' in response) {
      const accessToken = response.accessToken;
      await apiClient.post('google-authentication', { token: accessToken });
    }
  };

  return {
    handleSuccess,
  };
}

export default useGoogleAuthentication;
