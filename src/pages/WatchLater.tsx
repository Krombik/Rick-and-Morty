import React, { memo, useRef, VFC } from "react";
import Gutter from "components/common/Gutter";
import EpisodeSelector from "containers/watchLater/EpisodeSelector";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Grid from "@material-ui/core/Grid";
import WatchListItems from "containers/watchLater/WatchListItems";
import { createSelector } from "reselect";
import { useDispatch, useSelector } from "react-redux";
import { State, ThunkDispatcher } from "types";
import SortableList from "components/common/SortableList";
import { SortEnd } from "react-sortable-hoc";
import { setWatchList } from "redux/watchList/actions";
import { moveFromTo } from "utils/moveFromTo";

const selectData = createSelector(
  (state: State) => state.watchList.list,
  (watchList) => ({ watchList })
);

const WatchLater: VFC = memo(() => {
  const dispatch = useDispatch<ThunkDispatcher>();

  const { watchList } = useSelector(selectData);

  const ref = useRef<HTMLUListElement>(null);

  const handleSortEnd = ({ oldIndex, newIndex }: SortEnd) => {
    dispatch(setWatchList(moveFromTo(watchList, oldIndex, newIndex)));
  };

  return (
    <Gutter>
      <Grid item xs={12}>
        <SortableList
          axis="y"
          lockAxis="y"
          distance={10}
          onSortEnd={handleSortEnd}
          helperContainer={() => ref.current!}
          useDragHandle
        >
          <List disablePadding ref={ref}>
            {watchList.length > 0 && <WatchListItems watchList={watchList} />}
            <ListItem>
              <EpisodeSelector watchList={watchList} />
            </ListItem>
          </List>
        </SortableList>
      </Grid>
    </Gutter>
  );
});

export default WatchLater;
