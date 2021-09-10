import * as React from "react";
import { FC, ReactNode } from "react";
import styled from "styled-components";

import { Color, font, mixin } from "../../../utils/styles";

export interface PanelProps {
  children: ReactNode;
  width: string;
  height?: string;
  title?: string;
  description?: string;
  noPadding?: boolean;
}

const Panel: FC<PanelProps> = ({
  width,
  height,
  title,
  description,
  noPadding = false,
  children,
}) => {
  return (
    <Root width={width} height={height} noPadding={noPadding}>
      <Overlay>
        {title && (
          <Header>
            <Title>{title}</Title>
            {description && <Description>{description}</Description>}
          </Header>
        )}
        {children}
      </Overlay>
    </Root>
  );
};

const Root = styled.div<{ width: string; height?: string; noPadding: boolean }>`
  width: ${(props) => `${props.width}`};
  height: ${(props) => `${props.height}`};
  ${(props) => !props.noPadding && "padding: 20px;"}
  background-color: ${Color.transparncy};
  border-radius: 8px;
  transition: 0.1s ease-in-out;
  ${mixin.boxShadowMedium}

  &:hover {
    ${mixin.boxShadowLarge}
  }
`;

const Overlay = styled.div`
  background-color: transparent;
`;

const Title = styled.h3`
  ${font.size(18)}
  margin-bottom: 8px;
`;

const Description = styled.p``;

const Header = styled.div`
  margin-bottom: 20px;
`;

export default Panel;
