import { Card, Button, Select } from 'antd';
import { useModel } from 'umi';
import api from '@/api';
const { Option } = Select;

import './index.less';

export default function Example1Page() {
  const { setInitialState } = useModel('@@initialState');
  const { city } = useModel('city', (model) => ({ city: model.city }));
  // 接口测试
  const sendMessage = async () => {
    const huaOss = await api.getOssToken({});
    console.log(huaOss);
  };
  const sendError = async () => {
    const res = await api.getColumn({});
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

  const handleChange = (value: any) => {
    console.log(`selected ${value}`);
  };

  return (
    <Card className="example">
      <Card bordered={false}>
        <Button type="primary" onClick={sendMessage}>
          发送请求(正常)
        </Button>
        <Button type="primary" danger onClick={sendError}>
          发送请求(错误)
        </Button>
        <Button type="primary" onClick={updateGlobalData}>
          更新全局数据
        </Button>
      </Card>
      <Card bordered={false}>
        <Select style={{ width: '180px' }} defaultValue={city[0].id} onChange={handleChange}>
          {city.length > 0 &&
            city.map((item) => (
              <Option key={`city_${item.id}`} value={item.id}>
                {item.name}
              </Option>
            ))}
        </Select>
      </Card>
    </Card>
  );
}
