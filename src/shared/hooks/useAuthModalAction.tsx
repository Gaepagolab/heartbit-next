import { useCallback } from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";

import { authModalState } from "shared/atoms/authModalState";

export function useAuthModalAction() {
  const setAuthModal = useSetRecoilState(authModalState);

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
    openModal,
    closeModal,
    toggleMode,
  };
}

export function useAuthModal() {
  return useRecoilValue(authModalState);
}
