import { history } from 'umi';
import { isObject } from '@leslie0403/utils';

export function getInitialState() {
  return getGlobalInfo();
}

// 全局数据(基础用户信息)
function getGlobalInfo() {
  let token: any = localStorage.getItem('token');
  let baseInfo = {
    userId: '',
    name: '',
    avatar: '',
    role: '',
    isLogin: false, // 是否登录
  };
  let globalInfo;
  if (token) {
    let _token = JSON.parse(decodeURIComponent(token));
    if (isObject(_token)) {
      globalInfo = _token;
    } else {
      globalInfo = { ...baseInfo };
    }
  } else {
    globalInfo = { ...baseInfo };
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
