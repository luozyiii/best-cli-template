import { InitialState } from 'umi';

export default function (initialState: InitialState) {
  const { role } = initialState;

  return {
    canAccessAdmin: role === 'admin2',
  };
}
