import { useEffect, useRef, useState } from 'react';

export function useFetch<T>(thePromise: () => Promise<T>, dependencies?: unknown[]) {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const alreadyRun = useRef<boolean>(false);
  const deps = dependencies || [];

  useEffect(() => {
    console.log('running usefetch effect');
    if (alreadyRun.current) {
      return;
    }
    setLoading(true);
    alreadyRun.current = true;
    thePromise()
      .then((d) => {
        setData(d);
        setError('');
      })
      .catch(() => {
        setError('Something Went Wrong');
      })
      .finally(() => {
        setLoading(false);
      });
    return () => {
      console.log('usefetch effect cleanup');
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return { data, loading, error };
}
