import React from 'react';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import * as actions from '../../../store/actions';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import { FormWrapper, StyledForm } from '../../../hoc/layout/elements';
import Input from '../../../components/UI/Forms/Input/Input';
import Button from '../../../components/UI/Forms/Button/Button';
import Heading from '../../../components/UI/Headings/Heading';
import Message from '../../../components/UI/Message/Message';

const MessageWrapper = styled.div`
  position: absolute;
  bottom: 0;
`;

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email.')
    .required('The email is required!'),
  password: Yup.string()
    .required('The password is required!')
    .min(8, 'The password is too short!'),
});

const Login = () => {
  React.useEffect(() => {
    dispatch(actions.clean());
  }, []);
  const { loading, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={LoginSchema}
      onSubmit={async (values, { setSubmitting }) => {
        await dispatch(actions.signIn(values));
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, isValid }) => (
        <FormWrapper>
          <Heading noMargin size="h1" color="white">
            Login into your account
          </Heading>
          <Heading bold size="h4" color="white">
            Fill in your details to login into your account
          </Heading>
          <StyledForm>
            <Field
              type="email"
              name="email"
              placeholder="Your email..."
              component={Input}
            />
            <Field
              type="password"
              name="password"
              placeholder="Your password..."
              component={Input}
            />
            <Button
              disabled={!isValid || isSubmitting}
              loading={loading ? 'Logging in...' : null}
              type="submit"
            >
              Login
            </Button>
            <MessageWrapper>
              <Message error show={error}>
                {error}
              </Message>
            </MessageWrapper>
          </StyledForm>
        </FormWrapper>
      )}
    </Formik>
  );
};

export default Login;
