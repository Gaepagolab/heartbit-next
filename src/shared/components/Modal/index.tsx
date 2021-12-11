import React, { ReactNode, useState, useCallback } from "react";
import { AnimatePresence } from "framer-motion";

import * as S from "./Styles";

const defaultProps = {
  className: undefined,
  width: "440px",
  isOpen: undefined,
  onClose: () => {},
  renderLink: () => {},
};

const modalVariant = {
  initial: { opacity: 0 },
  isOpen: { opacity: 1 },
  exit: { opacity: 0 },
};

const containerVariant = {
  initial: { top: "80%", transition: { type: "spring" } },
  isOpen: { top: "50%" },
  exit: { top: "110%" },
};

export type ModalProps = {
  className?: string;
  children?: React.ReactNode;
  isOpen: boolean;
  title?: string;
  width?: string | number;
  height?: string | number;
  onClose: VoidFunction;
  withCloseIcon?: boolean;
  renderContent: ({ close }: { close: () => void }) => ReactNode;
};

const Modal: React.FC<ModalProps> = ({
  className,
  isOpen: propsIsOpen,
  onClose: tellParentToClose,
  renderContent,
  title,
  width,
  height,
}: ModalProps) => {
  const [stateIsOpen, setStateOpen] = useState(false);
  const isControlled = typeof propsIsOpen === "boolean";
  const isOpen = isControlled ? propsIsOpen : stateIsOpen;

  const closeModal = useCallback(() => {
    if (!isControlled) {
      setStateOpen(false);
    } else {
      tellParentToClose();
    }
  }, [isControlled, tellParentToClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <S.ScrollOverlay
          className={className}
          initial={"initial"}
          animate={"isOpen"}
          exit={"exit"}
          variants={modalVariant}
        >
          <S.Modal width={width} height={height} variants={containerVariant}>
            {renderContent({ close: closeModal })}
          </S.Modal>
        </S.ScrollOverlay>
      )}
    </AnimatePresence>
  );
};

Modal.defaultProps = defaultProps;

export default Modal;
