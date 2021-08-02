import { useState, useEffect } from 'react';
import { Http } from '@/utils';

export default function useHttpHook({ url, method = 'post', headers, body = {}, watch = [] }: any) {
  const [result, setResult] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Http({
      url,
      method,
      headers,
      body,
      setResult,
      setLoading,
    });
  }, watch);

  return [result, loading];
}
