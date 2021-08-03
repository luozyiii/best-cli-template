import { Container, Button, Checkbox, Form, Select } from 'semantic-ui-react';

export default function FormPage() {
  const friendOptions = [
    {
      key: 'A',
      text: '广州',
      value: 'A',
    },
    {
      key: 'B',
      text: '深圳',
      value: 'B',
    },
  ];
  return (
    <Container style={{ paddingTop: '24px' }}>
      <h4>基础表单：</h4>
      <Form>
        <Form.Input label="姓名" placeholder="请输入姓名"></Form.Input>
        <Form.Field>
          <label>爱好</label>
          <input placeholder="游戏，篮球，听音乐" />
        </Form.Field>
        <Form.Field>
          <label>城市</label>
          <Select placeholder="请选择" options={friendOptions} />
        </Form.Field>
        <Form.Field>
          <Checkbox toggle label="是否开启" />
        </Form.Field>
        <Form.Field>
          <Checkbox label="我同意xxx协议" />
        </Form.Field>
        <Button secondary type="submit" style={{ width: '100%' }}>
          提交
        </Button>
      </Form>
    </Container>
  );
}
