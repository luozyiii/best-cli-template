import { history } from 'umi';

export function getInitialState() {
  return { ...getGlobalInfo() };
}

// 全局数据(基础用户信息)
function getGlobalInfo() {
  let token: any = localStorage.getItem('token');
  let globalInfo;
  if (token) {
    globalInfo = JSON.parse(decodeURIComponent(token));
  } else {
    globalInfo = {
      userId: '',
      name: '',
      avatar: '',
      role: '',
      isLogin: token ? true : false, // 是否登录
    };
  }
  return globalInfo;
}

export const layout = {
  logout: () => {
    localStorage.clear();
    history.push({
      pathname: '/login',
    });
  },
};
