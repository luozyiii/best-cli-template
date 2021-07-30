export default function (initialState: any) {
  const { role } = initialState;

  return {
    canAccessAdmin: role === 'admin',
  };
}
