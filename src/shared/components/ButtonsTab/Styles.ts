import styled from "styled-components";

import { TabOwnProps } from ".";
import { font } from "shared/utils/styles";

export const Root = styled.div<{ width: string; height: string }>`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 8px;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: transparent;
  ${font.size(12)};
`;

export const StyledTab = styled.button<Partial<TabOwnProps>>`
  ${({ selected, highlightBackgroundColor, highlightColor, color }) =>
    selected
      ? `background-color: ${highlightBackgroundColor};
         color: ${highlightColor};
         box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.15);`
      : `background-color: transparent;
         color: ${color};`}
  width: ${({ tabWidth }) => tabWidth};
  height: 85%;
  border: none;
  outline: none;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  z-index: 2;
  ${font.medium}
`;

export const SelectedTabItem = styled(StyledTab)<Partial<TabOwnProps>>`
  position: absolute;
  background-color: transparent;
  width: ${({ tabWidth }) => tabWidth};
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.15);
  z-index: -1;
`;
