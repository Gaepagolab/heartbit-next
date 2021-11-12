import React, { FC, ReactNode } from "react";

import * as S from "./Styles";

export type GridProps = {
  children: ReactNode;
  className?: string;
  column: number;
  /** 나누고 싶은 비율의 숫자 입력히여 사용합니다. (아직 3개만 가능) */
  fraction?: string;
  gap?: number | string;
};

const Grid: FC<GridProps> & { defaultProps: Partial<GridProps> } = ({
  children,
  className,
  column,
  fraction,
  gap,
}: GridProps) => {
  return (
    <S.Root className={className} column={column} fraction={fraction} gap={gap}>
      {children}
    </S.Root>
  );
};

Grid.defaultProps = {
  className: undefined,
  column: 6,
  gap: 6,
};

export default Grid;
