import { Card } from 'antd';
import { useModel } from 'umi';
export default function IndexPage() {
  const { user } = useModel('user', (model) => ({ user: model.user }));
  return (
    <Card bordered={false}>
      <h3>{user.name}，欢迎您使用 Umi + TS 中后台项目模板</h3>
    </Card>
  );
}
