import { FC, useState } from "react";
import { Col, Row } from "reactstrap";
import styled from "styled-components";
import { useRouter } from "next/router";
import { AxiosError } from "axios";

import { Modal } from "components/atoms";
import { Color } from "utils/styles";
import { RegisterFormData } from "../registerForm";
import { RegisterForm } from "..";
import { apiClient } from "utils/client";

const RegisterModal: FC<{ registerToken: string }> = ({ registerToken }) => {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const onClosed = (): void => {
    router.push({ pathname: "/" }, "/", { shallow: true });
  };

  const onSumbit = async (registerForm: RegisterFormData): Promise<void> => {
    try {
      setLoading(true);
      const { data } = await apiClient.post("/authentication/register", {
        ...registerForm,
        token: registerToken,
      });
      onClosed();
      setLoading(false);
    } catch (error) {
      const err = error as AxiosError;
      console.error(err);
      if (err.response) {
        const { message } = err?.response?.data as { message: string };
        setError(message);
        setLoading(false);
      }
    }
  };

  return (
    <Modal isOpen size="lg" centered onClosed={onClosed}>
      <Container>
        <LeftPane sm={12} md={7}>
          <RegisterForm onSubmit={onSumbit} disabled={loading} />
          <div>{error}</div>
        </LeftPane>
        <RightPane sm={12} md={5}>
          <h3>환영합니다!</h3>
        </RightPane>
      </Container>
    </Modal>
  );
};

const Container = styled(Row)`
  min-height: 400px;
`;

const LeftPane = styled(Col)`
  padding: 60px 40px;
`;

const RightPane = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${Color.backgroundDark};
`;

export default RegisterModal;
