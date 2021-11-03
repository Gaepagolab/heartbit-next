import styled from "styled-components";

import { Color, font } from "utils/styles";
import { TextInputProps } from ".";

export const Root = styled.div<{ size: TextInputProps["size"] }>`
  position: relative;
  display: inline-block;
  height: 40px;
  width: 100%;
`;

export const InputElement = styled.input`
  height: 100%;
  width: 100%;
  padding: 10px 12px;
  border-radius: 4px;
  border: 1px solid ${Color.borderMedium};
  background: ${Color.backgroundLight};
  ${font.regular};
  ${font.size(14)};
  color: ${Color.textLight};

  &:hover {
    border-color: ${Color.borderDark};
  }

  &:focus {
    ${font.medium};
    border-color: ${Color.textLight};
  }

  &::placeholder {
    color: ${Color.textMedium};
  }
`;

export const Error = styled.div`
  text-align: left;
`;
