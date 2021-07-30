import avatarSrc from '@/assets/avatar.jpg';
export function getInitialState() {
  return {
    userId: '18825040666',
    name: 'Leslie Luo',
    avatar: avatarSrc,
    role: 'admin',
    isLogin: true, // 是否登录
  };
}

export const layout = {
  logout: () => {
    alert('退出登录成功');
  },
};
