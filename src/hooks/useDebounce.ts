import React from 'react';

const useDebounce = <T>(value: T, delay: number) => {
  const [debounceValue, setDebounceValue] = React.useState<T>(value);

  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [value, delay]);

  return debounceValue;
};

export default useDebounce;
