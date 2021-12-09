import { useCallback, useState } from 'react';
import { inputAutoComma } from 'src/utils/inputAutoComma';

const useInputComma = (initialData: string): [string, (e: any) => void, boolean] => {
  const [value, setValue] = useState(initialData);
  const [boolValue, setBoolValue] = useState(false);
  const handler = useCallback((e) => {
    setValue(inputAutoComma(e.target.value));
    e.target.value < 1 ? setBoolValue(false) : setBoolValue(true);
  }, []);
  return [value, handler, boolValue];
};

export default useInputComma;
