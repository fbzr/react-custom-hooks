import { useEffect, useState } from 'react';

const getSavedValue = (key: string, initialValue: string | Function) => {
  const savedValue = localStorage.getItem(key);

  if (savedValue) {
    return JSON.parse(savedValue);
  }

  if (initialValue instanceof Function) {
    return initialValue();
  }

  return initialValue;
};

export function useLocalStorage(key: string, initialValue: string | Function) {
  const [value, setValue] = useState(() => getSavedValue(key, initialValue));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
}
