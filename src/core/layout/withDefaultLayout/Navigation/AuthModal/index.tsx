import { Fragment } from "react";

import * as S from "./Styles";
import AuthEmailForm from "./AuthEmailForm";
import { Button, Icon, Modal, GoogleLogin } from "shared/components";

import useAuthModal from "shared/hooks/useAuthModal";

export default function AuthModal() {
  const { authModal, closeModal } = useAuthModal();

  return (
    <Modal
      width={440}
      title="로그인"
      isOpen={authModal.visible}
      onClose={closeModal}
      renderContent={() => (
        <S.ModalBody>
          {authModal.mode === "LOGIN" && (
            <Fragment>
              <AuthEmailForm />
              <GoogleLogin
                onSuccessCallback={closeModal}
                render={({ onClick }) => (
                  <Button onClick={onClick} variant="secondary" width="100%">
                    <Icon name="google" />
                    Google 로그인
                  </Button>
                )}
              />
            </Fragment>
          )}
        </S.ModalBody>
      )}
    />
  );
}
