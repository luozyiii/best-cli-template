import { useHistory } from 'umi';
import { Container, Button } from 'semantic-ui-react';
export default () => {
  const history = useHistory();
  const goHome = () => {
    history.push({
      pathname: '/',
    });
  };
  return (
    <Container textAlign="center" style={{ paddingTop: '12vh' }}>
      <h2>403</h2>
      <p style={{ color: 'rgba(0, 0, 0, 0.45)' }}>抱歉，您无权访问该页面</p>
      <Button secondary className="btn" onClick={() => goHome()}>
        返回首页
      </Button>
    </Container>
  );
};
