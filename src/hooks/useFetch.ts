import { useEffect, useState } from 'react';

interface IRequestInfo {
  loading: boolean;
  error: any;
  data: any;
}

export const useFetch = (url: string) => {
  const [requestInfo, setRequestInfo] = useState<IRequestInfo>({
    loading: false,
    error: null,
    data: null,
  });

  useEffect(() => {
    let ignore = false;

    try {
      setRequestInfo({
        ...requestInfo,
        loading: true,
      });

      fetch(url)
        .then((response) => response.json())
        .then((jsonData) => {
          if (!ignore) {
            setRequestInfo({
              loading: false,
              error: null,
              data: jsonData,
            });
          }
        });
    } catch (error) {
      setRequestInfo({
        loading: false,
        error: error as any,
        data: null,
      });
    }

    return () => {
      ignore = true;
    };
  }, []);

  return requestInfo;
};
