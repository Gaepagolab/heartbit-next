import { FC, ReactNode } from "react";
import {
  Modal as StrapModal,
  ModalProps as StrapModalProps,
  ModalBody,
} from "reactstrap";
import styled from "styled-components";

import { zIndexValues } from "shared/utils/styles";
import { MdClose } from "react-icons/md";

type ModalProps = {
  children: ReactNode;
} & StrapModalProps;

const Modal: FC<ModalProps> = ({ children, width, ...modalProps }) => {
  return (
    <StyledModal {...modalProps} fade={false}>
      <CloseButton onClick={modalProps.onClosed}>
        <MdClose size={24} color="#fff" />
      </CloseButton>

      <ModalBody>{children}</ModalBody>
    </StyledModal>
  );
};

const StyledModal = styled(StrapModal)`
  .modal-content {
    position: relative;
    z-index: ${zIndexValues.modal};
  }
  .modal-body {
    padding: 0;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  padding: 0;
  border: none;
  background: transparent;
  z-index: ${zIndexValues.modal + 1};
`;

export default Modal;
