import { useState, useCallback } from "react";

export default function useToggle(
  defaultValue: boolean
): [boolean, () => void] {
  const [value, setValue] = useState(defaultValue);

  const onToggle = useCallback(() => {
    setValue(!value);
  }, [value]);

  return [value, onToggle];
}
