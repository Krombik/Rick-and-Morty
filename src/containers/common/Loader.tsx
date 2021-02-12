import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAlert } from "redux/alert/actions";
import Spinner from "components/common/Spinner";
import { FetchRV, ThunkDispatcher } from "types";
import { FetcherFailError } from "types/error";

type DataObj<D extends {}> = {
  data: D;
};

type Props<D extends {}> = Partial<Record<string, unknown>> & DataObj<D>;

const Loader = <D extends {}, P extends Props<D>>({
  component,
  data,
  ...props
}: {
  component: FC<P>;
} & Omit<P, "data"> &
  Partial<DataObj<FetchRV<P["data"]>>>) => {
  const dispatch = useDispatch<ThunkDispatcher>();

  useEffect(() => {
    if ((data as FetcherFailError | undefined)?.errorStatus)
      dispatch(setAlert(true, data as FetcherFailError));
  }, [data, dispatch]);

  if (!data) return <Spinner />;

  if ((data as FetcherFailError).errorStatus) return null;

  const Component = component as FC<Props<D>>;

  return <Component data={data as D} {...props} />;
};

export default Loader;
