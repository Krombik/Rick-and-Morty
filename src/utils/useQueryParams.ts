import { parse, ParseOptions } from "query-string";
import { useMemo } from "react";
import { useLocation } from "react-router-dom";

const useQueryParams = <
  T extends { [key: string]: number | string | string[] | undefined } = any
>(
  options?: ParseOptions
) => {
  const { search } = useLocation();
  const params = useMemo(() => parse(search, options), [search]);
  return params as T;
};

export default useQueryParams;
