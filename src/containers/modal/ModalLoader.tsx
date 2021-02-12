import React, { VFC } from "react";
import { Character } from "types/character";
import useSWR from "swr";
import { FetchRV } from "types";
import fetcher from "utils/fetcher";
import Loader from "containers/common/Loader";
import CharacterTable from "containers/characters/CharacterTable";
import LocationTable from "containers/location/LocationTable";
import { Location } from "types/location";
import APIPaths from "api/apiAddresses";
import { Episode } from "types/episode";
import EpisodeTable from "containers/episode/EpisodeTable";

type Props = {
  id: number | string;
  path: string;
};

const ModalLoader: VFC<Props> = ({ path, id }) => {
  const { data } = useSWR<FetchRV<Character | Location | Episode>>(
    `${path}/${id}`,
    fetcher.get
  );

  switch (path) {
    case APIPaths.CHARACTER:
      return (
        <Loader component={CharacterTable} data={data as FetchRV<Character>} />
      );
    case APIPaths.LOCATION:
      return (
        <Loader component={LocationTable} data={data as FetchRV<Location>} />
      );
    case APIPaths.EPISODE:
      return (
        <Loader component={EpisodeTable} data={data as FetchRV<Episode>} />
      );
    default:
      return null;
  }
};

export default ModalLoader;
