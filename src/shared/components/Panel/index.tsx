import { FC, ReactNode } from "react";

import * as S from "./Styles";

export interface PanelProps {
  title?: string;
  description?: string;
  renderSelector?: () => ReactNode;
}

const Panel: FC<PanelProps> = ({
  children,
  title,
  description,
  renderSelector,
}) => (
  <S.Root>
    {(title || description || renderSelector) && (
      <S.Header>
        <S.Left>
          {title && <S.Title>{title}</S.Title>}
          {description && <S.Description>{description}</S.Description>}
        </S.Left>
        <S.Selectors>{renderSelector && renderSelector()}</S.Selectors>
      </S.Header>
    )}
    {children}
  </S.Root>
);

export default Panel;
