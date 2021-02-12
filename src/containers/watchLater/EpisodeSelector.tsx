import React, { useCallback, useEffect, useRef, useState, VFC } from "react";
import TextField from "@material-ui/core/TextField";
import { stringifyUrl } from "query-string";
import useDebounce from "utils/useDebounce";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useSWRInfinite } from "swr";
import { FetchRV, ThunkDispatcher } from "types";
import fetcher from "utils/fetcher";
import APIPaths from "api/apiAddresses";
import debounce from "lodash.debounce";
import "styled-components/macro";
import { Episode, Episodes } from "types/episode";
import { RouterQueryParams } from "types/router";
import InfinityListbox, { InfinityListboxProps } from "./InfinityListbox";
import { useDispatch } from "react-redux";
import { addToWatchList } from "redux/watchList/actions";
import TooltipIconButton from "components/common/TooltipIconButton";
import Grid from "@material-ui/core/Grid";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import filterArrayBy from "utils/filterArrayBy";
import { ToWatch } from "redux/watchList/type";

type Props = { watchList: ToWatch[] };

const EpisodeSelector: VFC<Props> = ({ watchList }) => {
  const dispatch = useDispatch<ThunkDispatcher>();

  const [select, setSelect] = useState<Episode | null>(null);

  const [search, setSearch] = useState("");

  const [debouncedSearch, setDebouncedSearch] = useState(search);

  useDebounce(
    search,
    (newFilter) => {
      if (newFilter !== debouncedSearch) {
        setDebouncedSearch(newFilter);
      }
    },
    300
  );

  const { data, size, setSize } = useSWRInfinite<FetchRV<Episodes>>(
    (page) =>
      stringifyUrl(
        {
          url: APIPaths.EPISODE,
          query: { [RouterQueryParams.NAME]: debouncedSearch, page: page || 1 },
        },
        { skipEmptyString: true }
      ),
    fetcher.get
  );

  const loadMoreAvailable = Boolean(
    data && data.length === size && data[size - 1].info?.next
  );

  const loadMore = useCallback(
    debounce(() => {
      setSize((size) => size + 1);
    }, 500),
    []
  );

  const prevData = useRef<FetchRV<Episodes>[]>();

  useEffect(() => {
    if (data) prevData.current = data;
  }, [data]);

  const episodes = data || prevData.current;

  const handleAddToWatchList = () => {
    if (select) {
      dispatch(addToWatchList(select.id));
      setSelect(null);
    }
  };

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs>
        <Autocomplete
          options={
            episodes
              ? filterArrayBy(
                  episodes.reduce<Episode[]>(
                    (acc, item) =>
                      item.results ? [...acc, ...item.results] : acc,
                    []
                  ),
                  watchList,
                  (dataItem, watchListItem) => dataItem.id === watchListItem.id
                )
              : []
          }
          ListboxComponent={InfinityListbox as any}
          ListboxProps={{ loadMore, loadMoreAvailable } as InfinityListboxProps}
          loading={!episodes}
          getOptionLabel={(option) => option.name}
          onChange={(_, option) => {
            setSelect(option);
          }}
          getOptionSelected={(option, value) => option.id === value.id}
          value={select}
          onInputChange={(_, value) => setSearch(value)}
          inputValue={search}
          renderInput={(params) => (
            <TextField
              {...params}
              fullWidth
              variant="outlined"
              label="Episode name"
            />
          )}
        />
      </Grid>
      <Grid item>
        <TooltipIconButton
          tooltip="Add to watch list"
          disabled={!select}
          onClick={handleAddToWatchList}
        >
          <PlaylistAddIcon />
        </TooltipIconButton>
      </Grid>
    </Grid>
  );
};

export default EpisodeSelector;
