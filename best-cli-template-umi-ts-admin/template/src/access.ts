import { InitialState, history } from 'umi';

export default function (initialState: InitialState) {
  const { role, isLogin } = initialState;

  // 登录拦截
  const loginPath = '/login';
  if (!isLogin && history.location.pathname !== loginPath) {
    history.push({
      pathname: loginPath,
    });
  }

  return {
    canAccessAdmin: role === 'admin',
  };
}
