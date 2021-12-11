import * as React from "react";
import { IconType } from "..";

import * as S from "./Styles";

const defaultProps = {
  className: undefined,
  value: undefined,
  size: "md" as const,
  onChange: () => {},
};

type HTMLInputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type Size = "xs" | "sm" | "md" | "lg" | "xl";

export type TextInputProps = Omit<HTMLInputProps, "size"> & {
  label?: string;
  error?: string;
  size?: Size;
  icon?: IconType;
};

const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  ({ className, size, error, onChange, icon, ...inputProps }, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(e);
      }
    };

    return (
      <S.Root className={className} size={size}>
        {icon && <S.StyledIcon name={icon} />}
        <S.InputElement
          {...inputProps}
          ref={ref}
          onChange={handleChange}
          hasIcon={!!icon}
        />
        {error && <S.Error>{error}</S.Error>}
      </S.Root>
    );
  }
);

TextInput.defaultProps = defaultProps;

export default TextInput;
