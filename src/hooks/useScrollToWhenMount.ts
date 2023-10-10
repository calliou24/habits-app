import { useEffect } from "preact/hooks";

export const useScrollToWhenMount = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
};
