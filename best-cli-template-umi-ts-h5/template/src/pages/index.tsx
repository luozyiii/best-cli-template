import { useHistory } from 'umi';
import { Container, List, Button } from 'semantic-ui-react';

import './index.less';

export default function IndexPage() {
  const history = useHistory();

  const gotoPage = (pathname: string) => {
    history.push({
      pathname,
    });
  };
  return (
    <Container textAlign="center" className="home-page">
      <List>
        <List.Item className="item">
          <Button content="基本用法" primary onClick={() => gotoPage('/example/example1')} />
        </List.Item>
        <List.Item className="item">
          <Button content="表单用法" primary onClick={() => gotoPage('/example/form')} />
        </List.Item>
        <List.Item className="item">
          <Button content="权限路由" primary onClick={() => gotoPage('/example/example2')} />
        </List.Item>
      </List>
    </Container>
  );
}
