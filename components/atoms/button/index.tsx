import { FC, ReactNode } from "react";
import {
  Button as StrapButton,
  ButtonProps as StrapButtonProps,
} from "reactstrap";
import styled, { css } from "styled-components";

import { Color } from "../../../utils/styles";

export type Variant = "primary" | "secondary" | "cancel";
export type ButtonProps = {
  children: ReactNode;
  variant: Variant;
} & StrapButtonProps;

const Button: FC<ButtonProps> = ({ children, variant, ...buttonProps }) => {
  return (
    <StyledButton {...buttonProps} variant={variant}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled(StrapButton)<{ variant: Variant }>`
  ${(props) => buttonStyles[props.variant]}
`;

const buttonStyles = {
  primary: css`
    border-color: ${Color.primary};
    color: ${Color.primary};
    &:hover {
      color: ${Color.white};
      background-color: ${Color.primary};
    }
  `,
};

export default Button;
