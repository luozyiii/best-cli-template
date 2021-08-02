import { useState, forwardRef, useImperativeHandle } from 'react';
import { Modal } from 'antd';

interface Props<T> {
  ref: T;
}

function BasicModal<T>(props: Props<T>, ref: any) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  // 该 hook 需要定义抛出给父组件的可以使用的 api 方法
  // 相当于代理了子组件的方法
  useImperativeHandle(ref, () => ({
    showModal() {
      setIsModalVisible(true);
    },
  }));

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  );
}

export default forwardRef(BasicModal);
