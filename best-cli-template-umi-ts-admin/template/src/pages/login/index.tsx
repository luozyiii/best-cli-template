import { Form, Input, Button, Checkbox, message } from 'antd';
import { useModel, history } from 'umi';
import avatarSrc from '@/assets/avatar.jpg';

import './index.less';

export default function LoginPage() {
  const { setInitialState } = useModel('@@initialState');

  const onFinish = (values: any) => {
    const { username } = values;
    if (username !== 'admin') {
      message.error('账号或密码错误');
      return;
    }
    let globalInfo = {
      username: 'admin',
      name: 'admin',
      avatar: avatarSrc,
      role: 'admin',
      isLogin: true,
    };
    localStorage.setItem('token', encodeURIComponent(JSON.stringify(globalInfo)));
    setInitialState((state: any) => {
      return {
        ...state,
        ...globalInfo,
      };
    });
    history.push({
      pathname: '/',
    });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className="login-page">
      <Form
        className="form"
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item label="账号" name="username" rules={[{ required: true, message: '请输入账号!' }]}>
          <Input />
        </Form.Item>

        <Form.Item label="密码" name="password" rules={[{ required: true, message: '请输入密码!' }]}>
          <Input.Password />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
          <Checkbox>记住密码</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
