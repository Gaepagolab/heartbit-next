import { font } from "shared/utils/styles";
import styled from "styled-components";

import { WhaleType } from ".";

export const Root = styled.div`
  min-height: 548px;
  max-height: 548px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const TradingType = styled.span<{ type: WhaleType["type"] }>`
  ${font.size(14)}
`;

export const Tr = styled.tr<{ type?: WhaleType["type"] }>`
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
