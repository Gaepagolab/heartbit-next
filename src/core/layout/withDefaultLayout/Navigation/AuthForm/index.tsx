import * as Yup from "yup";
import { Field, Form, Formik, FormikHelpers } from "formik";

import * as S from "./Styles";
import { Button, Icon, TextInput } from "shared/components";
import { checkEmail, sendVerificationEmail } from "shared/api/authenticate";

export type AuthFormValues = {
  email: string;
};

const AuthForm = () => {
  const onSubmit = async (values: AuthFormValues) => {
    const res = await sendVerificationEmail(values.email);
    console.log(res);
  };

  return (
    <S.Root>
      <Formik
        initialValues={{ email: "" }}
        validationSchema={Yup.object({
          email: Yup.string().email().required("이메일 형식에 맞지 않습니다."),
        })}
        onSubmit={async (
          values: AuthFormValues,
          { setSubmitting }: FormikHelpers<AuthFormValues>
        ) => {
          onSubmit(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form>
            {/* <S.FieldWrapper> */}
            <Field
              name="email"
              icon="mail"
              disabled={isSubmitting}
              as={TextInput}
              placeholder="이메일을 입력해주세요."
              error={touched.email && errors.email}
            />
            <S.Actions>
              <Button type="submit" disabled={isSubmitting} width="100%">
                이메일로 계속하기
              </Button>
              <S.Divider />
              <Button variant="secondary" disabled={isSubmitting} width="100%">
                <Icon name="google" />
                Google 로그인
              </Button>
            </S.Actions>
          </Form>
        )}
      </Formik>
    </S.Root>
  );
};

export default AuthForm;
