import { useState, useCallback } from 'react';
import { useModel } from 'umi';

export default function useAuthModel() {
  const { initialState, loading, error, refresh, setInitialState } = useModel('@@initialState');

  console.log('initialState', initialState);
  const [user, setUser] = useState({
    name: 'leslie',
    mobile: '1888xxx',
  });

  const signin = useCallback((account, password) => {
    // signin implementation
    console.log(account, password);
    setUser({
      name: 'leslie',
      mobile: '1888xxx',
    });
  }, []);

  const signout = useCallback(() => {
    // signout implementation
    // setUser(null)
  }, []);

  return {
    user,
    signin,
    signout,
  };
}
