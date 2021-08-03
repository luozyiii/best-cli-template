import { useState } from 'react';
import { useModel, useHistory } from 'umi';
import { Form, Button, Container } from 'semantic-ui-react';

import './index.less';

export default function LoginPage() {
  const { setInitialState } = useModel('@@initialState');
  const history = useHistory();
  // 账号
  const [username, setUsername] = useState<string>('');
  const [nameMsg, setNameMsg] = useState<any>(false);
  // 密码
  const [pwd, setPwd] = useState<string>('');
  const [pwdMsg, setPwdMsg] = useState<any>(false);

  const handleOnChange = (e: any, data: any) => {
    const { value, name } = data;
    switch (name) {
      case 'username':
        setNameMsg(false);
        setUsername(value);
        break;
      case 'password':
        setPwdMsg(false);
        setPwd(value);
        break;
      default:
        break;
    }
  };

  // 表单校验
  const verifyForm = () => {
    let result = true;
    if (!username) {
      setNameMsg('账号不能为空');
      result = false;
    } else if (username !== 'admin') {
      setNameMsg('账号错误');
      result = false;
    }
    if (!pwd) {
      setPwdMsg('密码不能为空');
      result = false;
    } else if (pwd !== '123456') {
      setPwdMsg('密码错误');
      result = false;
    }
    return result;
  };

  const login = () => {
    if (!verifyForm()) return;
    let globalInfo = {
      username: 'admin',
      name: 'admin',
      avatar: '',
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
  return (
    <Container className="login-page">
      <div className="box">
        <h3 className="title">欢迎您使用 Umi + TS H5项目模板</h3>
        <Form>
          <Form.Input
            name="username"
            placeholder="账号"
            value={username}
            error={nameMsg}
            onChange={(e, data) => handleOnChange(e, data)}
          ></Form.Input>
          <Form.Input
            name="password"
            placeholder="密码"
            value={pwd}
            type="password"
            error={pwdMsg}
            onChange={(e, data) => handleOnChange(e, data)}
          ></Form.Input>
          <Button secondary className="btn" onClick={() => login()}>
            登录
          </Button>
        </Form>
      </div>
    </Container>
  );
}
