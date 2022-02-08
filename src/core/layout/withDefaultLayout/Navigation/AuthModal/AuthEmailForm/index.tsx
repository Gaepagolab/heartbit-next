import * as Yup from "yup";
import { Field, Form, Formik, FormikHelpers } from "formik";

import * as S from "./Styles";
import { Button, TextInput } from "shared/components";

import { checkEmail } from "shared/api/authenticate";

export type AuthEmailFormValues = {
  email: string;
};

const AuthEmailForm = () => {
  const onSubmit = async ({ email }: AuthEmailFormValues) => {
    try {
      await checkEmail(email);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <S.Root>
      <Formik
        initialValues={{ email: "" }}
        validationSchema={Yup.object({
          email: Yup.string().email().required("이메일 형식에 맞지 않습니다."),
        })}
        onSubmit={async (
          values: AuthEmailFormValues,
          { setSubmitting }: FormikHelpers<AuthEmailFormValues>
        ) => {
          onSubmit(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form>
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
            </S.Actions>
          </Form>
        )}
      </Formik>
    </S.Root>
  );
};

export default AuthEmailForm;
