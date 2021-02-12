import React, { VFC } from "react";
import "styled-components/macro";
import Link from "@material-ui/core/Link";
import { useDispatch } from "react-redux";
import { ThunkDispatcher } from "types";
import { setModal } from "redux/modal/actions";
import parseUrl from "utils/parseUrl";

type Props = {
  text: string;
  url: string;
};

const OpenModalButton: VFC<Props> = ({ text, url }) => {
  const dispatch = useDispatch<ThunkDispatcher>();

  const handleMore = () => {
    const params = parseUrl(url);

    if (params) {
      dispatch(setModal({ open: true, ...params }));
    }
  };

  return (
    <Link
      component="button"
      variant="body2"
      color="inherit"
      underline="always"
      onClick={handleMore}
    >
      {text}
    </Link>
  );
};

export default OpenModalButton;
