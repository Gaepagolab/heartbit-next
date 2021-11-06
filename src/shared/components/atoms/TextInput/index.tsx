import * as React from "react";

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
};

const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  ({ className, size, error, onChange, ...inputProps }, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(e);
      }
    };

    return (
      <S.Root className={className} size={size}>
        <S.InputElement {...inputProps} ref={ref} onChange={handleChange} />
        {error && <S.Error>{error}</S.Error>}
      </S.Root>
    );
  }
);

TextInput.defaultProps = defaultProps;

export default TextInput;
