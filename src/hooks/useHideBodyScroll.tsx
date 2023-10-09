import { useEffect } from "preact/compat";

export default function useHideBodyScroll(condition: boolean) {
  useEffect(() => {
    const att = condition ? "hidden" : "auto";
    document.body.style.overflowY = att;
  }, [condition]);
}
