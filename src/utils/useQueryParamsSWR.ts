import { stringifyUrl } from "query-string";
import { useEffect, useRef } from "react";
import useSWR from "swr";
import { FetchRV } from "types";
import fetcher from "./fetcher";
import useQueryParams from "./useQueryParams";

const useQueryParamsSWR = <DataType extends {}, QueryParamsType extends {}>(
  url: string
) => {
  const prevDataRef = useRef<FetchRV<DataType>>();

  const queryParams = useQueryParams<QueryParamsType>();

  const { data, ...rest } = useSWR<FetchRV<DataType>>(
    stringifyUrl(
      {
        url,
        query: queryParams,
      },
      { skipEmptyString: true }
    ),
    fetcher.get
  );

  useEffect(() => {
    if (data) prevDataRef.current = data;
  }, [data]);

  return { ...rest, queryParams, data: data ?? prevDataRef.current };
};

export default useQueryParamsSWR;
