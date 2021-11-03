import { FC, useState } from "react";
import { Row, Col, Label } from "reactstrap";
import styled from "styled-components";

import { Modal, Button, Snackbar, TextInput } from "components/atoms";
import { useAuthModal, useAuthModalAction } from "hooks/useAuthModalAction";
import { Color, font } from "utils/styles";
import GoogleButton from "../googleButton";
import useInput from "hooks/useInput";
import AuthEmailForm from "../authEmailForm";
import { sendVerificationEmail, checkEmail } from "../../../api/authenticate";

type LoginState = "beforeLogin" | "logginIn";
type EmailState = "registered" | "unRegistered";

const AuthModal: FC = () => {
  const authModal = useAuthModal();
  const { closeModal, toggleMode } = useAuthModalAction();
  const [email, changeEmail, resetEmail] = useInput("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [loginState, setLoginState] = useState<LoginState>("beforeLogin");
  const [emailState, setEmailState] = useState<EmailState>(null);
  const [status, setStatus] = useState<"success" | "error">(null);

  const sendEmail = async (email: string) => {
    try {
      await sendVerificationEmail(email);
      setStatus("success");
      setEmailState("unRegistered");
    } catch (err) {
      console.log(err);
    }
  };

  const onSubmit = async (email: string) => {
    try {
      setLoading(true);
      const { registered } = await checkEmail(email);
      if (registered) {
        setEmailState("registered");
      } else {
        await sendEmail(email);
        setEmailState("unRegistered");
      }
      setLoading(false);
    } catch (error) {
      setStatus("error");
      setLoading(false);
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
      {loginState === "beforeLogin" && <Title>로그인</Title>}
      {loginState === "beforeLogin" && (
        <AuthEmailForm
          value={email}
          onChange={changeEmail}
          onSubmit={onSubmit}
          disabled={false}
        />
      )}
      {loginState === "beforeLogin" && (
        <>
          <Divder>or</Divder>
          <GoogleButton
            renderer={(renderProps) => (
              <ActionButton
                size="lg"
                theme="dark"
                onClick={renderProps.onClick}
              >
                Google로 로그인
              </ActionButton>
            )}
          />
        </>
      )}
      <div style={{ marginBottom: 16 }}>
        {status === "success" && (
          <Snackbar
            width="100%"
            type="success"
            text="회원가입 링크가 이메일로 전송되었습니다."
          />
        )}
        {status === "error" && (
          <Snackbar
            width="100%"
            type="error"
            text="서버 에러가 발생하였습니다. 관리자에게 문의하세요"
          />
        )}
      </div>
      {emailState === "registered" && (
        <div>
          <TextInput type="password" placeholder="비밀번호를 입력하세요" />
        </div>
      )}
      {/* 
      <SmallText>
        아직 회원이 아니신가요? <span onClick={toggleMode}>회원가입</span>
      </SmallText> */}
    </div>
  );

  console.log({ loginState });
  console.log({ emailState });

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
