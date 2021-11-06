import { useEffect } from "react";

import { KeyCodes } from "shared/utils/constants";

const useOnKeyDown = (
  keyCode: keyof typeof KeyCodes,
  onKeyDown: VoidFunction
): void => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.keyCode === KeyCodes[keyCode]) {
        onKeyDown();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [keyCode, onKeyDown]);
};

export default useOnKeyDown;
