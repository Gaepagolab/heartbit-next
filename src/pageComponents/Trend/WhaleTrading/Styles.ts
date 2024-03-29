import styled, { css } from "styled-components";

import { WhaleType } from ".";

export const Root = styled.div`
  min-height: 548px;
  max-height: 548px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Tr = styled.tr<{ type?: WhaleType["type"] }>`
  ${(props) => trVariants[props.type]}

  th:first-of-type,
  td:first-of-type {
    padding-left: 20px;
  }
  th:last-of-type,
  td:last-of-type {
    padding-right: 20px;
  }

  &:last-of-type {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`;

const trVariants = {
  ask: css`
    background: #4a776420;
  `,
  bid: css`
    background: #ac3c3e20;
  `,
};
