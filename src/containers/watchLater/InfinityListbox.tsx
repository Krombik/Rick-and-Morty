import React, { forwardRef, useEffect, useRef } from "react";
import useMergedRef from "utils/useMergedRef";

export type InfinityListboxProps = {
  loadMoreAvailable?: boolean;
  loadMore: () => void;
};

const InfinityListbox = forwardRef<HTMLElement, InfinityListboxProps>(
  ({ loadMore, loadMoreAvailable, ...props }, outerRef) => {
    const innerRef = useRef<HTMLElement>(null);

    const ref = useMergedRef(innerRef, outerRef);

    useEffect(() => {
      if (loadMoreAvailable) {
        const list = innerRef.current;

        if (list) {
          const handleScroll = () => {
            if (
              list.children.length &&
              list.scrollTop + list.clientHeight >
                list.scrollHeight -
                  (list.scrollHeight / list.children.length) * 4
            ) {
              loadMore();
            }
          };

          list.addEventListener("scroll", handleScroll);

          return () => list.removeEventListener("scroll", handleScroll);
        }
      }
    }, [loadMoreAvailable]);

    return <ul {...props} ref={ref} />;
  }
);

export default InfinityListbox;
