import styled from "styled-components";
import { motion } from "framer-motion";

import { ModalProps } from ".";
import { color, font, mixin, zIndexValues } from "shared/utils/styles";

export const ScrollOverlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${zIndexValues.modal};
`;

export const Modal = styled(motion.div)<Pick<ModalProps, "width" | "height">>`
  width: ${({ width }) => (typeof width === "string" ? width : `${width}px`)};
  height: ${({ height }) =>
    typeof height === "string" ? height : `${height}px`};
  background-color: ${color.backgroundDark};
  border-radius: 16px;
  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ModalHeader = styled.div`
  padding: 40px;
  ${mixin.flexSet("space-between", "center")}
`;

export const Title = styled.div`
  ${font.bold}
  ${font.size(28)};
`;

export const Content = styled.div`
  ${font.size(16)};
`;

export const ModalFooter = styled.div`
  margin-top: 64px;
  margin-bottom: 40px;
  ${mixin.flexSet()}
`;

export const Logo = styled.div`
  ${font.bold}
  ${font.size(22)}
`;
