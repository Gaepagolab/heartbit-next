import { useCallback } from "react";
import { useRecoilState } from "recoil";

import { authModalState } from "shared/atoms/authModalState";

export default function useAuthModal() {
  const [authModal, setAuthModal] = useRecoilState(authModalState);

  const openModal = useCallback(() => {
    setAuthModal((prev) => ({
      ...prev,
      visible: true,
    }));
  }, [setAuthModal]);

  const closeModal = useCallback(() => {
    setAuthModal((prev) => ({
      ...prev,
      visible: false,
    }));
  }, [setAuthModal]);

  const toggleMode = useCallback(() => {
    setAuthModal((prev) => ({
      ...prev,
      mode: prev.mode === "LOGIN" ? "REGISTER" : "LOGIN",
    }));
  }, [setAuthModal]);

  return {
    authModal,
    openModal,
    closeModal,
    toggleMode,
  };
}
