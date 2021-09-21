import { FC, ReactNode } from "react";
import {
  Button as StrapButton,
  ButtonProps as StrapButtonProps,
} from "reactstrap";
import styled, { css } from "styled-components";

import { Color } from "utils/styles";

export type Variant = "primary" | "secondary" | "cancel";
export type ButtonProps = {
  children: ReactNode;
  variant?: Variant;
  selected?: boolean;
} & StrapButtonProps;

const Button: FC<ButtonProps> = ({
  children,
  variant = "primary",
  selected,
  ...buttonProps
}) => {
  return (
    <StyledButton {...buttonProps} variant={variant} selected={selected}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button<{ variant: Variant; selected: boolean }>`
  ${(props) => buttonStyles[props.variant]}
  border: none;
  border-radius: 4px;
`;

const buttonStyles = {
  primary: css<{ selected: boolean }>`
    color: ${Color.white};
    background-color: ${Color.primary};
    &:hover,
    :focus {
      background-color: ${Color.primaryHover};
    }
    ${(props) => props.selected && `background-color: ${Color.primaryHover};`}
  `,
};

export default Button;
