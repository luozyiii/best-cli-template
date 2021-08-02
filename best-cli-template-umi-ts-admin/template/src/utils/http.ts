import { history } from 'umi';
import { message } from 'antd';

export default function Http({ url, method = 'post', headers = {}, body = {}, setLoading, setResult }: any) {
  setLoading && setLoading(true);

  const token = localStorage.getItem('token');

  let defaultHeader = {
    'Content-type': 'application/json',
    token: '',
  };

  defaultHeader = token ? { ...defaultHeader, token } : defaultHeader;

  let params: any;
  if (method.toUpperCase() === 'GET') {
    params = undefined;
  } else {
    params = {
      headers: {
        ...defaultHeader,
        ...headers,
      },
      method,
      body: JSON.stringify(body),
    };
  }

  return new Promise((resolve, reject) => {
    fetch(`/api${url}`, params)
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 200) {
          resolve(res.data);
          setResult && setResult(res.data);
        } else {
          if (res.status === 1001) {
            localStorage.clear();
            history.push({
              pathname: '/login',
            });
          }
          message.error(res.errMsg);
          reject(res.errMsg);
        }
      })
      .catch((err) => {
        console.log(err);
        message.error('网络异常，请稍后重试');
        reject(err);
      })
      .finally(() => {
        setLoading && setLoading(false);
      });
  });
}
