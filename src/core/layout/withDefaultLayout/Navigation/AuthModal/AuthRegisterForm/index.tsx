import { FC } from "react";
import * as Yup from "yup";
import { Field, Form, Formik, FormikHelpers } from "formik";

import { regXp } from "shared/utils/regXp";
import { TextInput, Button } from "shared/components";

export type RegisterFormValues = {
  name: string;
  password: string;
  confirmPassword?: string;
};
interface AuthRegisterFormProps {
  onSubmit: (formData: RegisterFormValues) => Promise<void>;
  disabled?: boolean;
}

const AuthRegisterForm: FC<AuthRegisterFormProps> = ({ onSubmit }) => {
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

          <Field
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            disabled={isSubmitting}
            as={TextInput}
            error={touched.confirmPassword && errors.confirmPassword}
          />
          <Button type="submit" disabled={isSubmitting}>
            Confirm
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default AuthRegisterForm;
