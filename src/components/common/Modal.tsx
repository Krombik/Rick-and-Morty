import React, { FC } from "react";
import "styled-components/macro";
import Fade from "@material-ui/core/Fade";
import MuiModal, { ModalProps } from "@material-ui/core/Modal";
import MuiBackdrop, { BackdropProps } from "@material-ui/core/Backdrop";
import { ThemeProps } from "types";
import { MODAL_FADE_DURATION } from "utils/constant";
import styled, { css } from "styled-components/macro";
import { Breakpoint } from "@material-ui/core/styles/createBreakpoints";

const Backdrop: FC<BackdropProps> = (props) => (
  <MuiBackdrop {...props} transitionDuration={MODAL_FADE_DURATION} />
);

type Props = { width?: Breakpoint };

const widthMixin = css`
  width: ${({ theme, width }: ThemeProps & Props) =>
    theme.breakpoints.width(width!)}px;
`;

const maxWidthMixin = css`
  max-width: 90vw;
`;

const ModalItemWrapper = styled.div<Props>`
  background: ${({ theme }: ThemeProps) => theme.palette.background.default};
  border-radius: ${({ theme }: ThemeProps) => theme.shape.borderRadius}px;
  margin: auto;
  ${({ width }) => (width ? widthMixin : maxWidthMixin)}
  max-height: 90vh;
  overflow-y: auto;
  overflow-x: hidden;
  padding: ${({ theme }: ThemeProps) => theme.spacing(2)}px;
  display: flex;
`;

const Modal: FC<Omit<ModalProps, "children"> & Props> = ({
  children,
  width,
  ...props
}) => (
  <MuiModal
    {...props}
    closeAfterTransition
    BackdropComponent={Backdrop}
    css={`
      display: flex;
    `}
  >
    <Fade in={props.open} timeout={MODAL_FADE_DURATION}>
      <ModalItemWrapper width={width}>{children}</ModalItemWrapper>
    </Fade>
  </MuiModal>
);

export default Modal;
