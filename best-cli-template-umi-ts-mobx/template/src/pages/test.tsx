import { observer } from 'mobx-react';
import { useStore } from '@/store';

const Test = () => {
  const { demoStore } = useStore();
  return <p>count:{demoStore.count}</p>;
};

export default observer(Test);
