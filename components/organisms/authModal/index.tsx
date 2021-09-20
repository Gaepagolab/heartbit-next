import { FC, useState, FormEvent } from "react";
import { Row, Col, Form, FormGroup, Label } from "reactstrap";

import { Modal, Button, TextInput } from "components/atoms";
import { useAuthModal, useAuthModalAction } from "hooks/useAuthModalAction";
import { apiClient } from "utils/client";
import styled from "styled-components";
import { Color, font } from "../../../utils/styles";
import GoogleButton from "../googleButton";

const AuthModal: FC = () => {
  const authModal = useAuthModal();
  const { closeModal, toggleMode } = useAuthModalAction();

  const [email, setEmail] = useState("");
  const [password] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await apiClient.post(`/authentication/log-in`, {
        email,
        password,
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const loginForm = () => (
    <Form onSubmit={handleSubmit}>
      <Title>로그인</Title>
      <FormGroup style={{ marginBottom: 16 }}>
        <Label for="email">이메일</Label>
        <TextInput
          id="email"
          placeholder="이메일을 입력하세요."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <ActionButton type="submit" outline variant="primary">
          이메일 로그인
        </ActionButton>
      </FormGroup>
      <Divder>or</Divder>
      <FormGroup>
        <GoogleButton
          renderer={(renderProps) => (
            <ActionButton outline theme="dark" onClick={renderProps.onClick}>
              Google로 로그인
            </ActionButton>
          )}
        />
      </FormGroup>

      <SmallText>
        아직 회원이 아니신가요? <span onClick={toggleMode}>회원가입</span>
      </SmallText>
    </Form>
  );

  const registerForm = () => (
    <Form onSubmit={handleSubmit}>
      <Title>회원가입</Title>
      <FormGroup style={{ marginBottom: 16 }}>
        <Label for="email">이메일</Label>
        <TextInput
          id="email"
          placeholder="이메일을 입력하세요."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <ActionButton type="submit" outline variant="primary">
          이메일 회원가입
        </ActionButton>
      </FormGroup>
      <Divder>or</Divder>
      <FormGroup>
        <GoogleButton
          renderer={(renderProps) => (
            <ActionButton outline theme="dark" onClick={renderProps.onClick}>
              Google로 회원가입
            </ActionButton>
          )}
        />
      </FormGroup>

      <SmallText>
        계정이 이미 있으신가요? <span onClick={toggleMode}>로그인</span>
      </SmallText>
    </Form>
  );

  return (
    <Modal size="lg" isOpen={authModal.visible} centered onClosed={closeModal}>
      <Container>
        <LeftPane md={5}>
          <h3>환영합니다!</h3>
        </LeftPane>
        <RightPane md={7}>
          {authModal.mode === "LOGIN" && loginForm()}
          {authModal.mode === "REGISTER" && registerForm()}
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
