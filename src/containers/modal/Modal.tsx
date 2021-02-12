import React, { FC, memo, useCallback, useEffect } from "react";
import { State, ThunkDispatcher } from "types";
import { createSelector } from "reselect";
import { useSelector, useDispatch } from "react-redux";
import { setModal } from "redux/modal/actions";
import { useHistory } from "react-router-dom";
import ModalComponent from "components/common/Modal";
import ModalLoader from "./ModalLoader";

const selectData = createSelector(
  (state: State) => state.modal.open,
  (state: State) => state.modal.path,
  (state: State) => state.modal.id,
  (open, path, id) => ({ open, path, id })
);

const Modal: FC = memo(() => {
  const { open, path, id } = useSelector(selectData);

  const dispatch = useDispatch<ThunkDispatcher>();

  const handleClose = useCallback(() => {
    dispatch(setModal({ open: false }));
  }, [dispatch]);

  const { listen } = useHistory();

  useEffect(() => {
    if (open) return listen(handleClose);
  }, [open]);

  if (!path || id === null) return null;

  return (
    <ModalComponent open={open} onClose={handleClose}>
      <ModalLoader path={path} id={id} />
    </ModalComponent>
  );
});

export default Modal;
