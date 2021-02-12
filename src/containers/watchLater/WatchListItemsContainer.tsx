import React, { VFC } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import DeleteIcon from "@material-ui/icons/Delete";
import { ToWatch } from "redux/watchList/type";
import { Episode } from "types/episode";
import sortAndCombineArrayBy from "utils/sortAndCombineArrayBy";
import TooltipIconButton from "components/common/TooltipIconButton";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { useDispatch } from "react-redux";
import { ThunkDispatcher } from "types";
import {
  removeFromWatchList,
  reverseWatchStatus,
} from "redux/watchList/actions";
import SortableItem from "components/common/SortableItem";
import DragHandle from "components/common/DragHandle";

type Props = {
  watchList: ToWatch[];
  data: Episode | Episode[];
};

const WatchListItemsContainer: VFC<Props> = ({ data, watchList }) => {
  const dispatch = useDispatch<ThunkDispatcher>();

  const episodes = Array.isArray(data) ? data : [data];

  return (
    <>
      {sortAndCombineArrayBy(
        episodes,
        watchList,
        (dataItem, watchListItem) => dataItem.id === watchListItem.id
      ).map((item, index) => (
        <SortableItem index={index} key={index}>
          <ListItem>
            <ListItemIcon>
              <DragHandle />
            </ListItemIcon>
            <ListItemText primary={item.name} secondary={item.episode} />
            <ListItemSecondaryAction>
              <TooltipIconButton
                tooltip={item.viewed ? "Already viewed" : "Not viewed yet"}
                onClick={() => {
                  dispatch(reverseWatchStatus(index));
                }}
              >
                <VisibilityIcon color={item.viewed ? "primary" : "disabled"} />
              </TooltipIconButton>
              <TooltipIconButton
                tooltip="Delete"
                onClick={() => {
                  dispatch(removeFromWatchList(index));
                }}
              >
                <DeleteIcon />
              </TooltipIconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </SortableItem>
      ))}
    </>
  );
};

export default WatchListItemsContainer;
