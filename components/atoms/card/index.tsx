import * as React from "react";
import { FC, ReactNode } from "react";
import styled from "styled-components";
import { Color } from "../../../utils/styles";

export interface CardProps {
  children: ReactNode;
}

const Card: FC<CardProps> = ({ children }) => {
  return <Root>{children}</Root>;
};

const Root = styled.div`
  margin: 0;
  background: ${Color.backgroundLight};
  padding: 20px 12px;
`;

export default Card;
