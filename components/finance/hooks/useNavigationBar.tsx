import { useState, useCallback } from "react";

export default function useNavigationBar(
  defaultValue: string
): [string, ((value) => void)] {
  const [value, setValue] = useState(defaultValue);

  const onChangeNavigationBar = useCallback((value) => {
    setValue(value);
  }, [value]);

  return [value, onChangeNavigationBar];
}
