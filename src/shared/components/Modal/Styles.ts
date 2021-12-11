import styled from "styled-components";
import { motion } from "framer-motion";

import { color, font, zIndexValues } from "shared/utils/styles";
import { ModalProps } from "shared/components";

export const ScrollOverlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${zIndexValues.modal};
`;

export const Modal = styled(motion.div)`
  min-width: 30rem;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: ${color.backgroundDark};
  border-radius: 16px;
  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Title = styled.div`
  padding: 40px;
  ${font.bold}
  ${font.size(28)};
`;

export const Content = styled.div`
  ${font.size(16)};
`;

export const Footer = styled.div`
  padding: 16px;
`;
