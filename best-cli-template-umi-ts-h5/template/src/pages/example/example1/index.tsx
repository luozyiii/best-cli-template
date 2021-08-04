import { useModel } from 'umi';
import api from '@/api';
import { Container, Button, Select, List } from 'semantic-ui-react';

import './index.less';

export default function Example1Page() {
  const { initialState, setInitialState } = useModel('@@initialState');
  const { city } = useModel('city', (model: any) => ({ city: model.city }));

  // 接口测试
  const sendMessage = async () => {
    const res = await api.getHotSearch({});
    console.log(res);
  };

  // 错误请求
  const sendError = async () => {
    const res = await api.getAbc({ a: 1 });
    console.log(res);
  };

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
          <Button secondary content="发送请求" primary onClick={sendMessage} />
        </List.Item>
        <List.Item>
          <Button color="youtube" content="发送请求(错误)" onClick={sendError} />
        </List.Item>
        <List.Item>
          <Select placeholder="全局数据" options={city} />
        </List.Item>
      </List>
    </Container>
  );
}
