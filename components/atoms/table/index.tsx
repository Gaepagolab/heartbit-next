import { FC, ReactNode } from "react";
import styled from "styled-components";

import { font, Color } from "../../../utils/styles";

export interface Props {
  children: ReactNode;
}

export const Table: FC<Props> = ({ children }) => {
  return <StyledTable>{children}</StyledTable>;
};

export const THead: FC<Props> = ({ children }) => {
  return <StyledTHead>{children} </StyledTHead>;
};

export const TBody: FC<Props> = ({ children }) => {
  return <StyledTBody>{children}</StyledTBody>;
};

const StyledTable = styled.table`
  ${font.size(16)}
  width: 100%;
`;

const StyledTHead = styled.thead`
  border-bottom: 1px solid ${Color.borderMedium};

  & > tr > th {
    padding: 6px 0;
    &:last-of-type {
      text-align: right;
    }
  }
`;
const StyledTBody = styled.tbody`
  & > tr > td {
    padding: 6px 0;
    &:last-of-type {
      text-align: right;
    }
  }
`;

export default Table;
