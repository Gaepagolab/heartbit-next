import React, {
  Fragment,
  useState,
  useRef,
  useEffect,
  useCallback,
} from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { AnimatePresence } from "framer-motion";

// import useOnOutsideClick from "shared/hooks/onOutsideClick";
// import useOnEscapeKeyDown from "shared/hooks/onEscapeKeyDown";

import {
  ScrollOverlay,
  ClickableOverlay,
  StyledModal,
  CloseIcon,
} from "./Styles";
import { isServer } from "../../constants/env";

const propTypes = {
  className: PropTypes.string,
  testid: PropTypes.string,
  variant: PropTypes.oneOf(["center", "aside"]),
  width: PropTypes.number,
  withCloseIcon: PropTypes.bool,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  renderLink: PropTypes.func,
  renderContent: PropTypes.func.isRequired,
};

const defaultProps = {
  className: undefined,
  testid: "modal",
  variant: "center",
  width: 600,
  withCloseIcon: true,
  isOpen: undefined,
  onClose: () => {},
  renderLink: () => {},
};

const Modal = ({
  className,
  testid,
  variant,
  width,
  withCloseIcon,
  isOpen: propsIsOpen,
  onClose: tellParentToClose,
  renderLink,
  renderContent,
}) => {
  const [stateIsOpen, setStateOpen] = useState(false);
  const isControlled = typeof propsIsOpen === "boolean";
  const isOpen = isControlled ? propsIsOpen : stateIsOpen;

  const $modalRef = useRef();
  const $clickableOverlayRef = useRef();
  const $portal = !isServer && document.getElementById("portal");

  const closeModal = useCallback(() => {
    if (!isControlled) {
      setStateOpen(false);
    } else {
      tellParentToClose();
    }
  }, [isControlled, tellParentToClose]);

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

  // useOnOutsideClick($modalRef, isOpen, closeModal, $clickableOverlayRef);
  // useOnEscapeKeyDown(isOpen, closeModal);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isOpen]);

  if (!$portal) return null;

  return (
    <Fragment>
      {!isControlled && renderLink({ open: () => setStateOpen(true) })}

      {isOpen &&
        ReactDOM.createPortal(
          <AnimatePresence>
            <ScrollOverlay>
              <ClickableOverlay
                variant={variant}
                ref={$clickableOverlayRef}
                variants={modalVariant}
                initial={"initial"}
                animate={"isOpen"}
                exit={"exit"}
              >
                <StyledModal
                  className={className}
                  variant={variant}
                  width={width}
                  data-testid={testid}
                  ref={$modalRef}
                  variants={containerVariant}
                >
                  {withCloseIcon && (
                    // <CloseIcon
                    //   name="profile"
                    //   variant={variant}
                    //   onClick={closeModal}
                    // />
                    <button onClick={closeModal}>close</button>
                  )}
                  {renderContent({ close: closeModal })}
                </StyledModal>
              </ClickableOverlay>
            </ScrollOverlay>
          </AnimatePresence>,
          $portal
        )}
    </Fragment>
  );
};

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

export default Modal;
