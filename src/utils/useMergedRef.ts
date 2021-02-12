import { MutableRefObject, Ref, RefCallback, useCallback } from "react";

const useMergedRef = <T extends any>(...refs: Ref<T>[]): RefCallback<T> =>
  useCallback(
    (el: T) =>
      refs.forEach((ref) => {
        if (typeof ref === "function") {
          ref(el);
        } else if (ref && typeof ref === "object") {
          (ref as MutableRefObject<T>).current = el;
        }
      }),
    refs
  );

export default useMergedRef;
