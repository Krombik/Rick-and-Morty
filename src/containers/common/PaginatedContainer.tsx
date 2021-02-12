import React, { FC } from "react";
import Grid from "@material-ui/core/Grid";
import { Pagination, PaginationItem } from "@material-ui/lab";
import { Link } from "react-router-dom";
import { stringify } from "query-string";

type Props = {
  queryParams: Partial<Record<string, string>>;
  pagesCount: number;
};

const PaginatedContainer: FC<Props> = ({
  pagesCount,
  queryParams,
  children,
}) => {
  const { page = 1 } = queryParams;

  return (
    <>
      <Grid item container spacing={3}>
        {children}
      </Grid>
      {pagesCount > 1 && (
        <Grid item container justify="center">
          <Pagination
            count={pagesCount}
            page={+page}
            renderItem={(item) => (
              <PaginationItem
                component={Link}
                to={{ search: stringify({ ...queryParams, page: item.page }) }}
                {...item}
              />
            )}
          />
        </Grid>
      )}
    </>
  );
};

export default PaginatedContainer;
