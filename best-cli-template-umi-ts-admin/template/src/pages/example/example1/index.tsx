import { Card, Button } from 'antd';
import { Http } from '@/utils';

export default function Example1Page() {
  // 接口测试
  const sendMessage = async () => {
    const huaOss = await Http({
      url: '/groupbuy/upload/getHwObsTempToken',
    });
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
