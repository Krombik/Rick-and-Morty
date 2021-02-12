import React, { VFC } from "react";
import { Character } from "types/character";
import Grid from "@material-ui/core/Grid";
import "styled-components/macro";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { useDispatch } from "react-redux";
import { ThunkDispatcher } from "types";
import { mutate } from "swr";
import APIPaths from "api/apiAddresses";
import { setModal } from "redux/modal/actions";

type Props = {
  data: Character;
};

const CharacterPreview: VFC<Props> = ({ data }) => {
  const dispatch = useDispatch<ThunkDispatcher>();

  const handleMore = () => {
    mutate(`${APIPaths.CHARACTER}/${data.id}`, data, false);
    dispatch(setModal({ open: true, path: APIPaths.CHARACTER, id: data.id }));
  };

  return (
    <Paper
      css={`
        display: flex;
        overflow: hidden;
      `}
    >
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <img
            alt={data.name}
            src={data.image}
            css={`
              height: 200px;
              width: 200px;
              object-fit: cover;
              display: flex;
            `}
          />
        </Grid>
        <Grid
          item
          xs
          container
          spacing={2}
          direction="column"
          justify="space-around"
          css={`
            height: 100%;
          `}
        >
          <Grid item>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Typography variant="h5">{data.name}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle1" color="textSecondary">
                  {[data.species, data.gender, data.status]
                    .filter((item) => item)
                    .join(", ")}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Link
              component="button"
              variant="body2"
              color="inherit"
              underline="always"
              onClick={handleMore}
            >
              See more...
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CharacterPreview;
