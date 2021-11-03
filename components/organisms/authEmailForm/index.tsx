import { FC } from "react";
import { Label } from "reactstrap";
import styled from "styled-components";

import { TextInput, Button } from "../../atoms";

interface AuthEmailFormProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  onSubmit: (value: string) => Promise<void>;
  mode?: "REGISTER" | "LOGIN";
  disabled: boolean;
}

const AuthEmailForm: FC<AuthEmailFormProps> = ({
  value,
  mode,
  onChange,
  onSubmit,
  disabled,
}) => {
  return (
    <Root
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(value);
      }}
    >
      <Label for="email">이메일</Label>
      <Row>
        <TextInput value={value} onChange={onChange} />
        <Button type="submit">로그인</Button>
      </Row>
    </Root>
  );
};

const Row = styled.div`
  display: flex;
  width: 100;
`;

const Root = styled.form`
  input {
    flex: 1;
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
    padding: 1rem;
    font-size: 1rem;
    height: 3rem;

    border-right: none;
    &::placeholder {
    }
    &:disabled {
    }
  }
  button {
    font-size: 16px;
    height: 3rem;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
    width: 6rem;
    word-break: keep-all;
    cursor: pointer;
    &:hover,
    &:focus {
    }
    &:disabled {
      cursor: default;
    }
  }
`;

export default AuthEmailForm;
