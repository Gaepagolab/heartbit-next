import { FC } from "react";
import styled from "styled-components";
import * as Yup from "yup";
import { Field, Form, Formik, FormikHelpers } from "formik";

import { TextInput, Button } from "shared/components/atoms";
import { regXp } from "shared/utils/regXp";

export type RegisterFormValues = {
  name: string;
  password: string;
  confirmPassword?: string;
};
interface RegisterFormProps {
  onSubmit: (formData: RegisterFormValues) => Promise<void>;
  disabled?: boolean;
}

const RegisterForm: FC<RegisterFormProps> = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ name: "", password: "", confirmPassword: "" }}
      validationSchema={Yup.object({
        name: Yup.string().required(),
        password: Yup.string()
          .min(6)
          .matches(regXp.containLowercase)
          .matches(regXp.containUpppercase)
          .matches(regXp.containSpecialCharacter)
          .required(),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref("password"), null], "비밀번호가 일치하지 않습니다.")
          .required(),
      })}
      onSubmit={async (
        values: RegisterFormValues,
        { setSubmitting }: FormikHelpers<RegisterFormValues>
      ) => {
        onSubmit(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, errors, touched }) => (
        <Form>
          {/* <S.FieldWrapper> */}
          <Field
            name="name"
            placeholder="Name"
            disabled={isSubmitting}
            as={TextInput}
            error={touched.name && errors.name}
          />
          <Field
            type="password"
            name="password"
            placeholder="Password"
            disabled={isSubmitting}
            as={TextInput}
            error={touched.password && errors.password}
          />
          {/* </S.FieldWrapper> */}
          {/* <S.FieldWrapper> */}
          <Field
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            disabled={isSubmitting}
            as={TextInput}
            error={touched.confirmPassword && errors.confirmPassword}
          />
          {/* </S.FieldWrapper> */}
          <Button type="submit" disabled={isSubmitting}>
            Confirm
          </Button>
        </Form>
      )}
    </Formik>
  );
};

const Root = styled.form`
  width: 100%;
`;

export default RegisterForm;
