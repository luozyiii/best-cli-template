import { useHistory } from 'umi';
import { observer } from 'mobx-react';
import { useStore } from '@/store';

import styles from './index.less';

const IndexPage = () => {
  const { demoStore } = useStore();
  const history = useHistory();
  const handleClick = () => {
    demoStore.addCount();
  };
  const handleSkip = () => {
    history.push({
      pathname: '/test',
    });
  };
  return (
    <div>
      <h1 className={styles.title}>Hello Mobx</h1>
      <p>count:{demoStore.count}</p>
      <button style={{ marginRight: '12px' }} onClick={handleClick}>
        点击
      </button>
      <button onClick={handleSkip}>跳转</button>
    </div>
  );
};

export default observer(IndexPage);
