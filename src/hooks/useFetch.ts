import { useEffect, useState } from 'react';

export const useFetch = (url: string) => {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    let ignore = false;

    try {
      setLoading(true);

      fetch(url)
        .then((response) => response.json())
        .then((jsonData) => {
          if (!ignore) {
            setData(jsonData);
          }
        });
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }

    return () => {
      ignore = true;
    };
  }, []);

  console.log('log.loading', loading);
  return { loading, error, data };
};
