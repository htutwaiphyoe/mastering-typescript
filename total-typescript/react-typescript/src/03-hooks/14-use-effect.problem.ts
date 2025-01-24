import { useEffect } from "react";

export const useTimeout = (timerMs: number) => {
  useEffect(() => {
    const timeOut = setTimeout(() => {
      console.log("Done!");
    }, timerMs);

    return () => {
      clearTimeout(timeOut);
    };
  }, [timerMs]);
};
