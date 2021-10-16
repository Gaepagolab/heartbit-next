import { FC } from "react";
import styled from "styled-components";
import { Input, InputProps } from "reactstrap";

import { Color } from "../../../utils/styles";

export type TextInputProps = { height?: number } & InputProps;

const TextInput: FC<TextInputProps> = ({ height = 50, ...inputProps }) => {
  return <StyledInput type="text" style={{ height }} {...inputProps} />;
};

const StyledInput = styled(Input)`
  background: ${Color.backgroundDark};
  border-color: ${Color.borderDark};
  color: ${Color.white};

  &:active,
  :focus {
    color: ${Color.white};
    background: ${Color.backgroundLight};
    /* border-color: ${Color.borderMedium}; */
    outline: none;
  }

  &:disabled {
    color: ${Color.textLight};
    background: ${Color.backgroundDark};
  }
`;

export default TextInput;
