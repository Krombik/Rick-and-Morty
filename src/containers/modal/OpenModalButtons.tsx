import React, { useEffect, VFC } from "react";
import "styled-components/macro";
import Link from "@material-ui/core/Link";
import { useDispatch } from "react-redux";
import { ThunkDispatcher } from "types";
import { setModal } from "redux/modal/actions";
import parseUrl from "utils/parseUrl";
import useSWR, { mutate } from "swr";
import { Location } from "types/location";
import { Character } from "types/character";
import fetcher from "utils/fetcher";
import Skeleton from "@material-ui/lab/Skeleton";
import { setAlert } from "redux/alert/actions";
import { FetcherFailError } from "types/error";
import { Episode } from "types/episode";

type Props = {
  urls: string[];
};

const Component: VFC<Props> = ({ urls }) => {
  const dispatch = useDispatch<ThunkDispatcher>();

  const params = urls.map((url) => parseUrl(url));

  const path = params[0]!.path;

  const { data } = useSWR<
    | Character[]
    | Location[]
    | Episode[]
    | Character
    | Location
    | Episode
    | FetcherFailError
  >(
    `${path}/${params
      .reduce<string[]>((acc, item) => (item ? [...acc, item.id] : acc), [])
      .join(",")}`,
    fetcher.get
  );

  useEffect(() => {
    if ((data as FetcherFailError | undefined)?.errorStatus)
      dispatch(setAlert(true, data as FetcherFailError));
  }, [data, dispatch]);

  if (!data) return <Skeleton />;

  if (Array.isArray(data))
    return (
      <>
        {(data as any[]).map((item: Character | Location | Episode, index) => (
          <Link
            key={index}
            component="button"
            variant="body2"
            color="inherit"
            underline="always"
            onClick={() => {
              mutate(`${path}/${item.id}`, item, false);
              dispatch(setModal({ open: true, id: item.id, path }));
            }}
            css={`
              &:not(:last-child)::after {
                content: ", ";
                display: inline-block;
                margin-right: 5px;
              }
            `}
          >
            {item.name}
          </Link>
        ))}
      </>
    );

  if ((data as FetcherFailError).errorStatus) return null;

  return (
    <Link
      component="button"
      variant="body2"
      color="inherit"
      underline="always"
      onClick={() => {
        dispatch(
          setModal({
            open: true,
            id: (data as Character | Location | Episode).id,
            path,
          })
        );
      }}
    >
      {(data as Character | Location | Episode).name}
    </Link>
  );
};

const OpenModalButtons: VFC<Props> = ({ urls }) =>
  urls.length > 0 ? <Component urls={urls} /> : null;

export default OpenModalButtons;
