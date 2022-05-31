import React, { FC, ReactNode } from "react";

import * as S from "./Styles";

export type GridProps = {
  children: ReactNode;
  className?: string;
  column: number;
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
