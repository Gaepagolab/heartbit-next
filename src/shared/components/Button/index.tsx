import { FC } from "react";

import { StyledButton } from "./Styles";

export type Size = "sm" | "md" | "lg";
export type Variant = "primary" | "secondary" | "cancel" | "text";
export interface ButtonProps
  extends Omit<React.HTMLProps<HTMLButtonElement>, "size"> {
  size?: Size;
  variant?: Variant;
  width?: string | number;
  selected?: boolean;
}

const Button: FC<ButtonProps> = ({
  children,
  size = "md",
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

export default Button;
