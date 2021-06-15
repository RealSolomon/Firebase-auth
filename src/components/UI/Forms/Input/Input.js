import React from 'react';
import styled from 'styled-components';

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  margin-bottom: 3.5rem;
  flex-direction: column;

  &:last-of-type {
    margin-bottom: 4.5rem;
  }
`;

const StyledInput = styled.input`
  padding: 1rem 2rem;
  width: 100%;
  background-color: ${(props) => props.theme.colors.mainLight};
  color: ${(props) => props.theme.colors.whiteColor};
  font-weight: 500;
  font-size: 1.2rem;
  border-radius: 2rem;
  border: none;

  &::placeholder {
    color: ${(props) => props.theme.colors.whiteColor};
  }
`;

const Error = styled.div`
  color: var(--color-redError);
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
  opacity: ${({ show }) => (show ? '1' : '0')};
  transform: translateY(${({ show }) => (show ? '20px' : '10px')});
  transition: all 0.1s;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 0rem 2rem;
  font-weight: 500;
  font-size: 1.2rem;
`;

const Input = ({ field, form: { touched, errors }, ...props }) => {
  return (
    <InputWrapper>
      <StyledInput {...field} {...props} />
      <Error show={errors[field.name] && touched[field.name]}>
        {errors[field.name]}
      </Error>
    </InputWrapper>
  );
};

export default Input;
