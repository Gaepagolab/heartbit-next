import { FC, ReactNode } from "react";
import styled from "styled-components";

import { font, mixin } from "shared/utils/styles";

export interface PanelProps {
  children: ReactNode;
  width: string;
  height?: string;
  title?: string;
  description?: string;
  noPadding?: boolean;
  renderSelector?: () => ReactNode;
}

const Panel: FC<PanelProps> = ({
  width,
  height,
  title,
  description,
  noPadding = false,
  children,
  renderSelector,
}) => {
  return (
    <Root width={width} height={height} noPadding={noPadding}>
      <Overlay>
        {title && (
          <Header>
            <Title>{title}</Title>
            {description && <Description>{description}</Description>}
            {renderSelector && <Selector>{renderSelector()}</Selector>}
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
  border-radius: 8px;
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

const Selector = styled.div`
  padding: 0 20px 8px 20px;
  ${mixin.flexSet("flex-end")}
`;

export default Panel;
