import { FC, useState, FormEvent } from "react";
import { Row, Col, Form, FormGroup, Label } from "reactstrap";
import styled from "styled-components";

import { Modal, Button, TextInput, Snackbar } from "components/atoms";
import { useAuthModal, useAuthModalAction } from "hooks/useAuthModalAction";
import { apiClient } from "utils/client";
import { Color, font } from "utils/styles";
import GoogleButton from "../googleButton";
import useInput from "hooks/useInput";
import AuthEmailForm from "../authEmailForm";

const AuthModal: FC = () => {
  const authModal = useAuthModal();
  const { closeModal, toggleMode } = useAuthModalAction();
  const [email, changeEmail, resetEmail] = useInput("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"success" | "error">(null);

  const onSubmit = async (email: string) => {
    try {
      setLoading(true);
      await apiClient.post("/email-confirmation/send-verification-link", {
        email,
      });
      setStatus("success");
      setLoading(false);
    } catch (error) {
      setStatus("error");
      setLoading(false);
      console.log(error);
    }
  };

  const onClosed = () => {
    closeModal();
    setStatus(null);
    setLoading(false);
    setErrors({});
    resetEmail();
  };

  const loginForm = () => (
    <div>
      <Title>로그인</Title>
      <FormGroup style={{ marginBottom: 16 }}>
        <Label for="email">이메일</Label>
        {status === "success" && (
          <Snackbar
            width="100%"
            type="success"
            text="회원가입 링크가 이메일로 전송되었습니다."
          />
        )}
        {!status && (
          <AuthEmailForm
            value={email}
            onChange={changeEmail}
            onSubmit={onSubmit}
            disabled={false}
          />
        )}
      </FormGroup>
      <Divder>or</Divder>
      <FormGroup>
        <GoogleButton
          renderer={(renderProps) => (
            <ActionButton size="lg" theme="dark" onClick={renderProps.onClick}>
              Google로 로그인
            </ActionButton>
          )}
        />
      </FormGroup>

      <SmallText>
        아직 회원이 아니신가요? <span onClick={toggleMode}>회원가입</span>
      </SmallText>
    </div>
  );

  return (
    <Modal size="lg" isOpen={authModal.visible} centered onClosed={onClosed}>
      <Container>
        <LeftPane sm={12} md={5}>
          <h3>환영합니다!</h3>
        </LeftPane>
        <RightPane sm={12} md={7}>
          {authModal.mode === "LOGIN" && loginForm()}
          {/* {authModal.mode === "REGISTER" && registerForm()} */}
        </RightPane>
      </Container>
    </Modal>
  );
};

const Container = styled(Row)`
  min-height: 400px;
`;
const LeftPane = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${Color.backgroundDark};
`;
const RightPane = styled(Col)`
  padding: 60px 40px;
`;

const Title = styled.h3`
  ${font.size(24)}
  margin-bottom: 24px;
`;

const ActionButton = styled(Button)`
  width: 100%;
  border-radius: 40px;
`;

const Divder = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
  color: ${Color.textMedium};

  line-height: 50px;
  text-align: center;

  ::before,
  ::after {
    position: absolute;
    width: 40%;
    height: 1px;

    top: 24px;

    background-color: ${Color.borderDark};

    content: "";
  }

  ::before {
    left: 0;
  }

  ::after {
    right: 0;
  }
`;

const SmallText = styled.p`
  margin: 16px 0;
  color: ${Color.white};
`;

export default AuthModal;
