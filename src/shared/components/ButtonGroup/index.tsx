import React from "react";

import * as S from "./Styles";

export type Direction = "row" | "column";
export type Align = "left" | "center" | "right";

export type ButtonGroupProps = {
  direction: Direction;
  align?: Align;
  children: React.ReactNode;
  gap?: number | string;
};

const ButtonGroup: React.FC<ButtonGroupProps> & {
  defaultProps: Partial<ButtonGroupProps>;
} = ({ direction, align, children, gap }: ButtonGroupProps) => {
  return (
    <S.ButtonGroup direction={direction} align={align} gap={gap}>
      {children}
    </S.ButtonGroup>
  );
};

ButtonGroup.defaultProps = {
  direction: "row",
  align: "left",
  gap: "0.5rem",
};

export default ButtonGroup;
