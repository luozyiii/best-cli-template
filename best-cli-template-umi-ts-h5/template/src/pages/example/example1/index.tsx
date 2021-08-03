import { useModel } from 'umi';
import { Container, Button, Select, List } from 'semantic-ui-react';

import './index.less';

export default function Example1Page() {
  const { initialState, setInitialState } = useModel('@@initialState');
  const { city } = useModel('city', (model: any) => ({ city: model.city }));

  // 更新全局数据
  const updateGlobalData = () => {
    setInitialState((state: any) => {
      let userInfo = { ...state, name: 'new name' };
      localStorage.setItem('token', encodeURIComponent(JSON.stringify(userInfo)));
      return userInfo;
    });
  };

  return (
    <Container className="example-container">
      <List>
        <List.Item>
          <Button secondary content="更新全局数据" primary onClick={updateGlobalData} />
          (name: {initialState.name})
        </List.Item>
        <List.Item>
          <Select placeholder="全局数据" options={city} />
        </List.Item>
      </List>
    </Container>
  );
}
