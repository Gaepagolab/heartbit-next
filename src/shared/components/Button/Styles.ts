import styled, { css } from "styled-components";

import { color, font, mixin } from "shared/utils/styles";
import { Size, Variant } from ".";

const SizeDefault = 16;

const buttonVariants = {
  primary: css<{ selected: boolean }>`
    color: ${color.textWhite};
    background: ${color.red500};

    &:hover,
    :focus {
    }

    &:disabled {
      background-color: black;
    }
  `,
  secondary: css`
    color: ${color.textWhite};
    background: ${color.backgroundLight};
  `,
  text: css`
    color: ${color.textWhite};
    background: transparent;
  `,
};

const buttonSizes = {
  sm: css`
    height: 40px;
    ${font.size(SizeDefault * 0.8)}
  `,
  md: css`
    height: 48px;
    ${font.size(SizeDefault)}
  `,
  lg: css`
    height: 54px;
    ${font.size(SizeDefault * 1.2)}
  `,
};

export const StyledButton = styled.button<{
  variant: Variant;
  size: Size;
  selected: boolean;
}>`
  ${font.bold}
  ${mixin.flexSet()}
  ${mixin.clickable}
  border: none;
  border-radius: 12px;

  > svg {
    margin-right: 8px;
  }

  ${(props) => buttonVariants[props.variant]}
  ${(props) => buttonSizes[props.size]}
`;
