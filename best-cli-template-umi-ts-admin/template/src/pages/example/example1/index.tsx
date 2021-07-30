import { Card, Button } from 'antd';
import api from '@/api';

export default function Example1Page() {
  // 接口测试
  const sendMessage = async () => {
    const huaOss = await api.getOssToken({});
    console.log(huaOss);
  };
  return (
    <Card>
      <Button type="primary" onClick={sendMessage}>
        发送请求
      </Button>
    </Card>
  );
}
