import { useState } from 'react';
import { Button, Input } from 'semantic-ui-react';

import './index.less';

export default function LoginPage() {
  return (
    <div className="login-page">
      <div className="box">
        <h3 className="title">H5 项目模板</h3>
        <Input className="input" placeholder="账号" />
        <Input className="input" placeholder="密码" type="password" />
        <Button secondary className="btn">
          登录
        </Button>
      </div>
    </div>
  );
}
