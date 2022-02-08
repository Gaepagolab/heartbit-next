import styled from "styled-components";

import { ButtonGroupProps } from ".";

export const ButtonGroup = styled.div<ButtonGroupProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ align }) =>
    align === "left"
      ? "flex-start"
      : align === "center"
      ? "center"
      : "flex-end"};

  button:not(:first-child) {
    margin-left: ${({ direction, gap }) => (direction === "row" ? gap : "0")};
    margin-top: ${({ direction, gap }) => (direction === "column" ? gap : "0")};
  }
`;
