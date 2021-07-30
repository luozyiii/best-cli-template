import { Card, Button } from 'antd';
import { useModel } from 'umi';
import api from '@/api';

export default function Example1Page() {
  const { setInitialState } = useModel('@@initialState');
  // 接口测试
  const sendMessage = async () => {
    const huaOss = await api.getOssToken({});
    console.log(huaOss);
  };
  // 更新全局数据
  const updateGlobalData = () => {
    setInitialState((state: any) => {
      return { ...state, name: 'new name' };
    });
  };

  return (
    <Card>
      <Button type="primary" onClick={sendMessage}>
        发送请求
      </Button>
      <Button style={{ marginLeft: '12px' }} type="primary" onClick={updateGlobalData}>
        更新全局数据
      </Button>
    </Card>
  );
}
