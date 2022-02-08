import styled from "styled-components";

import { color, font } from "shared/utils/styles";

export const Table = styled.table`
  width: 100%;
`;

export const THead = styled.thead`
  ${font.size(13)}
  color: ${color.textDarkBlue};

  & > tr > th {
    padding: 8px 24px;
    &:first-of-type {
      text-align: left;
    }
    &:last-of-type {
      text-align: right;
    }
  }
`;

export const TBody = styled.tbody`
  ${font.size(14)}
  & > tr > td {
    padding: 8px 24px;
    &:first-of-type {
      text-align: left;
    }
    &:last-of-type {
      text-align: right;
    }
  }
`;
