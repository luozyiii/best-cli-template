import { useHistory, useModel } from 'umi';
import { Container, List, Button } from 'semantic-ui-react';

import './index.less';

export default function IndexPage() {
  const history = useHistory();
  const { initialState } = useModel('@@initialState');

  const gotoPage = (pathname: string) => {
    history.push({
      pathname,
    });
  };

  const logout = () => {
    localStorage.clear();
    gotoPage('/login');
  };

  return (
    <Container textAlign="center" className="home-page">
      <h3 className="title">{initialState.name ? initialState.name : '未登录'}，欢迎您使用 Umi + TS H5项目模板</h3>
      <List>
        <List.Item>
          <Button
            className="home-btn"
            secondary
            content="基本用法"
            primary
            onClick={() => gotoPage('/example/example1')}
          />
        </List.Item>
        <List.Item>
          <Button className="home-btn" secondary content="基础表单" primary onClick={() => gotoPage('/example/form')} />
        </List.Item>
        <List.Item>
          <Button
            className="home-btn"
            secondary
            content="权限路由(无权限)"
            primary
            onClick={() => gotoPage('/example/example2')}
          />
        </List.Item>
        {!initialState.isLogin && (
          <List.Item>
            <Button className="home-btn" basic color="black" content="登录" onClick={() => gotoPage('/login')} />
          </List.Item>
        )}
        {initialState.isLogin && (
          <List.Item>
            <Button className="home-btn" basic color="black" content="退出登录" onClick={() => logout()} />
          </List.Item>
        )}
      </List>
    </Container>
  );
}
