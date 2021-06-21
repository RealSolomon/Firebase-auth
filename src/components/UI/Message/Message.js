import React from 'react';
import styled from 'styled-components';

const P = styled.p`
font-weight: 700;
font-size: 1.2rem;
color: ${({ error, success }) => {
  if (error) return '#ff5757';
  if (success) return 'green';
  else return '${(props) => props.theme.colors.main';
}}}
opacity: ${({ show }) => (show ? '1' : '0')};
  transform: translateY(${({ show }) => (show ? '30px' : '0px')});
  text-align: center;
  transition: all 0.2s;
`;

const Message = ({ children, error, success, show }) => {
  return (
    <P error={error} success={success} show={show}>
      {children}
    </P>
  );
};

export default Message;
