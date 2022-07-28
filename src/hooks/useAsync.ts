import { useEffect, useState } from 'react';

interface IRequestInfo {
  loading: boolean;
  error: any;
  data: any;
}

export const useAsync = (callback: () => Promise<any>) => {
  const [asyncStatus, setAsyncStatus] = useState<IRequestInfo>({
    loading: false,
    error: null,
    data: null,
  });

  useEffect(() => {
    let ignore = false;

    setAsyncStatus({
      loading: true,
      error: null,
      data: null,
    });

    callback()
      .then((result) => {
        if (!ignore) {
          setAsyncStatus({
            data: result,
            error: null,
            loading: false,
          });
        }
      })
      .catch((error) => {
        setAsyncStatus({
          data: null,
          error,
          loading: false,
        });
      });

    return () => {
      ignore = true;
    };
  }, []);

  return asyncStatus;
};
