import { useState, useCallback } from "react";

export const useClock = (isInteractive) => {
  const [isDragEnabled, setIsDragEnabled] = useState(false);

  const enableDrag = useCallback(() => {
    if (!isInteractive) {
      return;
    }
    setIsDragEnabled(true);
  }, [isInteractive]);

  const removeDrag = useCallback(() => {
    if (!isInteractive) {
      return;
    }
    setIsDragEnabled(false);
  }, [isInteractive]);

  return [enableDrag, removeDrag, isDragEnabled];
};
