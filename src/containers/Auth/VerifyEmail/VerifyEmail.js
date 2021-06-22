import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import { FormWrapper } from '../../../hoc/layout/elements';
import Heading from '../../../components/UI/Headings/Heading';
import Button from '../../../components/UI/Forms/Button/Button';
import Message from '../../../components/UI/Message/Message';

import * as actions from '../../../store/actions';

const MessageWrapper = styled.div`
  position: absolute;
  bottom: 0;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const VerifyEmail = () => {
  const { loading, error } = useSelector((state) => state.auth.verifyEmail);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(actions.clean());
  }, []);

  return (
    <FormWrapper>
      <Wrapper>
        <Heading noMargin color="white" size="h1">
          Verify your email
        </Heading>
        <Heading color="white" bold size="h4">
          Please, go to your email inbox and verify.
        </Heading>
        <Button
          loading={loading ? 'Sending email...' : null}
          disabled={loading}
          onClick={() => dispatch(actions.verifyEmail())}
        >
          Re-send verification email
        </Button>
        <MessageWrapper>
          <Message error show={error}>
            {error}
          </Message>
        </MessageWrapper>
        <MessageWrapper>
          <Message success show={error === false}>
            Message sent successfully!
          </Message>
        </MessageWrapper>
      </Wrapper>
    </FormWrapper>
  );
};

export default VerifyEmail;
