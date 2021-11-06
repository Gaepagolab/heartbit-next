import { FC } from "react";
import styled, { css } from "styled-components";

import { font, mixin } from "shared/utils/styles";

export type Size = "sm" | "md" | "lg";
export type Variant = "primary" | "secondary" | "cancel";
export interface ButtonProps
  extends Omit<React.HTMLProps<HTMLButtonElement>, "size"> {
  size?: Size;
  variant?: Variant;
  width?: string | number;
  selected?: boolean;
}

const Button: FC<ButtonProps> = ({
  children,
  size = "sm",
  variant = "primary",
  selected,
  width,
  ...rest
}) => {
  const htmlProps = rest as any;

  return (
    <StyledButton
      {...htmlProps}
      size={size}
      variant={variant}
      selected={selected}
      css={[{ width }]}
    >
      {children}
    </StyledButton>
  );
};

const SizeDefault = 16;

const StyledButton = styled.button<{
  variant: Variant;
  size: Size;
  selected: boolean;
}>`
  ${mixin.flexSet()}
  border: none;
  border-radius: 4px;

  ${(props) => buttonVariants[props.variant]}
  ${(props) => buttonSizes[props.size]}
`;

const buttonVariants = {
  primary: css<{ selected: boolean }>`
    &:hover,
    :focus {
    }

    &:disabled {
      background-color: black;
    }
  `,
};

const buttonSizes = {
  sm: css`
    padding: 2px 6px;
    ${font.size(SizeDefault * 0.8)}
  `,
  md: css`
    padding: 6px 12px;
    ${font.size(SizeDefault)}
  `,
  lg: css`
    padding: 8px 16px;
    ${font.size(SizeDefault * 1.2)}
  `,
};

export default Button;
