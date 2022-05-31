import React, { ReactNode, useState, useCallback } from "react";
import { AnimatePresence } from "framer-motion";

import * as S from "./Styles";
import { Button, Icon } from "shared/components";
import useOnKeyDown from "shared/hooks/useOnKeyDown";

const defaultProps = {
  className: undefined,
  width: 440,
  isOpen: false,
  withCloseIcon: true,
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
  renderContent?: ({ close }: { close: () => void }) => ReactNode;
};

const Modal: React.FC<ModalProps> = ({
  className,
  isOpen: propsIsOpen,
  onClose: tellParentToClose,
  title,
  width,
  height,
  withCloseIcon,
  renderContent,
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

  useOnKeyDown("ESCAPE", closeModal);

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
            <S.ModalHeader>
              <S.Title>{title}</S.Title>
              {withCloseIcon && (
                <Button onClick={closeModal} variant="text">
                  <Icon name="close" />
                </Button>
              )}
            </S.ModalHeader>
            {renderContent({ close: closeModal })}
            <S.ModalFooter>
              <S.Logo>Heartbit</S.Logo>
            </S.ModalFooter>
          </S.Modal>
        </S.ScrollOverlay>
      )}
    </AnimatePresence>
  );
};

Modal.defaultProps = defaultProps;

export default Modal;
