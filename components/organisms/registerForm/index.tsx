import { FC } from "react";
import { Label } from "reactstrap";
import styled from "styled-components";

import { TextInput, Button } from "components/atoms";
import useInputs from "hooks/useInputs";

export type RegisterFormData = {
  name: string;
};
interface RegisterFormProps {
  onSubmit: (formData: RegisterFormData) => Promise<void>;
  disabled?: boolean;
}

const RegisterForm: FC<RegisterFormProps> = ({ onSubmit, disabled }) => {
  const [formData, onChange] = useInputs<RegisterFormData>({ name: "" });

  return (
    <Root
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(formData);
      }}
    >
      <Label for="name">이름</Label>
      <TextInput
        name="name"
        value={formData.name}
        onChange={onChange}
        disabled={disabled}
      />
      <Button type="submit" disabled={disabled}>
        회원가입
      </Button>
    </Root>
  );
};

const Root = styled.form`
  width: 100%;
`;

export default RegisterForm;
