import React from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../../../store/actions';

const Logout = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(actions.signOut());
  }, [dispatch]);
  return null;
};

export default Logout;
