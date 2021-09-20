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
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: ${(props) => `${props.width}`};
  height: ${(props) => `${props.height}`};
  background-color: ${Color.transparncy};
  border-radius: 8px;
  ${mixin.boxShadowMedium}

  &:hover {
    ${mixin.boxShadowLarge}
  }
`;

const Overlay = styled.div`
  background-color: transparent;
  height: 100%;
`;

const Title = styled.h3`
  ${font.size(15)}
  padding: 20px 20px 8px 20px;
`;

const Description = styled.p`
  padding: 0px 20px 8px 20px;
`;

const Header = styled.div``;

export default Panel;
