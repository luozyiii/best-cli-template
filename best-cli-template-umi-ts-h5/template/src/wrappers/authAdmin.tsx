import { useAccess } from 'umi';
import P403 from '@/components/P403';

export default (props: any) => {
  const access = useAccess();
  if (access.canAccessAdmin) {
    return <div>{props.children}</div>;
  } else {
    return <P403></P403>;
  }
};
