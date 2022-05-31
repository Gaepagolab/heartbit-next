import styled from "styled-components";

import { media } from "shared/utils/styles";
import { GridProps } from ".";

export const Root = styled.div<GridProps>`
  width: 100%;
  display: grid;
  grid-template-columns: ${(props) =>
    props.fraction
      ? `${props.fraction.split(" ")[0]}fr ${props.fraction.split(" ")[1]}fr ${
          props.fraction.split(" ")[2]
        }fr`
      : `repeat(${props.column}, 1fr)`};

  grid-template-rows: auto;
  align-content: start;
  gap: ${(props) => props.gap}px;

  ${media.large} {
    grid-template-columns: repeat(${(props) => props.column - 2}, 1fr);
  }
  ${media.small} {
    grid-template-columns: repeat(${(props) => props.column - 4}, 1fr);
  }
`;
