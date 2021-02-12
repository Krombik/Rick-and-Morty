import React, { useEffect, useRef, VFC } from "react";
import APIPaths from "api/apiAddresses";
import Loader from "containers/common/Loader";
import { FetchRV } from "types";
import useSWR from "swr";
import WatchListItemsContainer from "./WatchListItemsContainer";
import { Episode } from "types/episode";
import fetcher from "utils/fetcher";
import { ToWatch } from "redux/watchList/type";

type Props = { watchList: ToWatch[] };

const WatchListItems: VFC<Props> = ({ watchList }) => {
  const prevDataRef = useRef<FetchRV<Episode | Episode[]>>();

  const { data } = useSWR<FetchRV<Episode | Episode[]>>(
    `/${APIPaths.EPISODE}/${watchList
      .map((item) => item.id)
      .sort((a, b) => b - a)
      .join(",")}`,
    fetcher.get
  );

  useEffect(() => {
    if (data) prevDataRef.current = data;
  }, [data]);

  return (
    <Loader
      component={WatchListItemsContainer}
      data={data || prevDataRef.current}
      watchList={watchList}
    />
  );
};

export default WatchListItems;
