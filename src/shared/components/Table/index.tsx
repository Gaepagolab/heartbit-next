import { FC, ReactNode } from "react";

import * as S from "./Styles";

export interface Props {
  children: ReactNode;
}

export const Table: FC<Props> = ({ children }) => {
  return <S.Table>{children}</S.Table>;
};

export const THead: FC<Props> = ({ children }) => {
  return <S.THead>{children} </S.THead>;
};

export const TBody: FC<Props> = ({ children }) => {
  return <S.TBody>{children}</S.TBody>;
};

export default Table;
