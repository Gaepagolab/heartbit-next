import styled from "styled-components";

import { font, color } from "shared/utils/styles";
import { TextInputProps } from ".";
import { Icon } from "..";

export const Root = styled.div<{ size: TextInputProps["size"] }>`
  position: relative;
  display: inline-block;
  height: 48px;
  width: 100%;
`;

export const InputElement = styled.input<{ hasIcon: boolean }>`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 10px 14px;
  ${(props) => props.hasIcon && "padding-left: 48px;"}
  border: none;
  border-radius: 12px;
  background: ${color.backgroundDarkest};
  color: ${color.textDarkBlue};
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

export const StyledIcon = styled(Icon)`
  position: absolute;
  top: 13px;
  left: 14px;
  pointer-events: none;
  color: ${color.textMedium};
`;
