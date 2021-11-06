import styled from "styled-components";

import { font } from "shared/utils/styles";
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

  ${font.regular};
  ${font.size(14)};

  &:hover {
  }

  &:focus {
    ${font.medium};
  }

  &::placeholder {
  }
`;

export const Error = styled.div`
  text-align: left;
`;
